"""The settings page."""

import asyncio
import httpx
import datetime
import reflex as rx
from sqlmodel import Field, SQLModel, select, JSON
from TruckrZzz.dashboard import Trucker
from TruckrZzz.components.navbar import navbar
from TruckrZzz.TruckrZzz import HeartRate
from typing import Any


class GraphState(rx.State):
    @rx.var
    def user_id(self) -> str:
        return self.router.page.params.get('id')
    
    data: list[dict[str, Any]] = []

    def update_graph_data(self, new):
        self.data = new

        
    running: bool = False
    
    def toggle_streaming(self):
        self.running = not self.running
        if self.running:
            return GraphState.get_api_data
        
    def get_graph_data(self):
        with rx.session() as session:
            trucker = session.exec(select(Trucker).where(Trucker.device_id == self.user_id)).first()
            data = trucker.graph_data if trucker else []
            self.update_graph_data(data)
    
    sleepiness_value = 4 # change the value to the real sleepiness value

    #httpx is required in order to make async calls with reflex
    @rx.background
    async def get_api_data(self):
        while True:
            if not self.running:
                break

            async with self:
                time = datetime.datetime.now()
                timestamp = f"{time.hour}: {time.minute}.{time.second}"
                data_to_append = {"name": timestamp}

                with rx.session() as session:
                    statement = select(HeartRate).where(HeartRate.device_id == self.user_id).order_by(HeartRate.created_at.desc())
                    result = session.exec(statement).first()
                    value = result.value
                    heartrate = result.heartrate

                    if(value < self.sleepiness_value):
                        if self.data[-1]["awake"] is not None:
                            self.data[-1]["sleepy"] = self.data[-1]["awake"]
                        data_to_append["awake"] = None
                        data_to_append["sleepy"] = value
                    elif(value >= self.sleepiness_value):
                        if self.data[-1]["awake"] is None:
                            data_to_append["sleepy"] = value # will make the whole valley red
                            self.data[-1]["awake"] = self.data[-1]["sleepy"] # makes only the downward slope red
                        else:
                            data_to_append["sleepy"] = None # indent if the else above is not commented out
                        data_to_append["awake"] = value

                    trucker = session.exec(Trucker.select.where(Trucker.device_id == self.user_id)).first()
                    combined = trucker.graph_data + [data_to_append]
                    trucker.graph_data = combined
                    session.add(trucker)
                    self.update_graph_data(combined)
                    session.commit()

            await asyncio.sleep(3)  # Interval at which the API is polled
                # -----old ------
                # response = httpx.get('http://localhost:8001/sleepiness')
                # data = response.json()
                # value = data['value']
                # data_to_append = {"name": timestamp}
                # if(value < self.sleepiness_value):
                #     if self.data[-1]["awake"] is not None:
                #         self.data[-1]["sleepy"] = self.data[-1]["awake"]
                #     data_to_append["awake"] = None
                #     data_to_append["sleepy"] = value
                # elif(value >= self.sleepiness_value):
                #     if self.data[-1]["awake"] is None:
                #         data_to_append["sleepy"] = value # will make the whole valley red
                #         # self.data[-1]["awake"] = self.data[-1]["sleepy"] # makes only the downward slope red
                #     else:
                #         data_to_append["sleepy"] = None
                #     data_to_append["awake"] = value
                # self.data.append(data_to_append)
                # self.graph_data.append({"name": timestamp, "value": data['value']})

def get_name_by_id() -> str:
    with rx.session() as session:
        trucker = session.exec(select(Trucker).where(Trucker.device_id == GraphState.user_id)).first()
        return trucker.name if trucker else "Trucker not found"

@rx.page(route="/graphs/[id]", title="user graphs", on_load=GraphState.get_graph_data)
def graphs() -> rx.Component:
    return rx.vstack(
        navbar(),
        rx.cond(
            GraphState.user_id,
            rx.heading(f"Showing graph for user {GraphState.user_id}", size="8"),
            rx.heading("Loading user id...")
        ),
        rx.vstack(
            rx.button(
                "Toggle Streaming",
                on_click=GraphState.toggle_streaming,
                color_scheme='blue'
            ),
            rx.recharts.line_chart(
                rx.recharts.line(
                    data_key="sleepy",
                    stroke="#FF0000",
                    type_="monotone"
                ),
                rx.recharts.line(
                    data_key="awake",
                    stroke="#8884d8",
                    type_="monotone"
                ),
                rx.recharts.x_axis(data_key="name"),
                rx.recharts.y_axis(),
                rx.recharts.graphing_tooltip(), #adds the hover effect
                rx.recharts.legend(),
                data=GraphState.data,
                width=600,
                height=400,
            ),
            rx.recharts.bar_chart(
                rx.recharts.bar(
                    data_key="sleepy", stroke="#FF0000", fill="#FF0000"
                ),
                rx.recharts.bar(
                    data_key="awake", stroke="#8884d8", fill="#8884d8"
                ),
                rx.recharts.brush(
                    data_key="name", height=30, stroke="#8884d8"
                ),
                rx.recharts.x_axis(data_key="name"),
                rx.recharts.y_axis(),
                data=GraphState.data,
                width=600,
                height=400,
            ),
            align_items="center"
        ),
        align_items="center"
    )
