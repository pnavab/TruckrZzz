"""The settings page."""

import asyncio
import httpx
import datetime
import reflex as rx

from TruckrZzz.components.navbar import navbar


class GraphState(rx.State):
    @rx.var
    def user_id(self) -> str:
        return self.router.page.params.get('id')
    
    # def get_name_from_id(self):
    #     name = DashboardState.get_name_by_id(self.user_id)
    #     return name
    
    running: bool = False
    graph_data = [
        {"name": "start", "value": 9},
    ]

    data: list = [
        {"name": "Start", "awake": 9, "sleepy": None},
        {"name": "Start", "awake": 6, "sleepy": 6},
        {"name": "Start", "awake": 5, "sleepy": None},
    ]

    # def get_last_value(self):
    last_value = graph_data[-1]["value"]
      # return last_value
    
    def toggle_streaming(self):
        self.running = not self.running
        if self.running:
            return GraphState.get_api_data
    
    sleepiness_value = 4 # change the value to the real sleepiness value
    #httpx is required in order to make async calls with reflex
    @rx.background
    async def get_api_data(self):
        while True:
            await asyncio.sleep(1)  # Interval at which the API is polled
            if not self.running:
                break

            async with self:
                time = datetime.datetime.now()
                timestamp = f"{time.hour}: {time.minute}.{time.second}"

                response = httpx.get('http://localhost:8001/sleepiness')
                data = response.json()
                value = data['value']
                data_to_append = {"name": timestamp}
                if(value < self.sleepiness_value):
                    if self.data[-1]["awake"] is not None:
                        self.data[-1]["sleepy"] = self.data[-1]["awake"]
                    data_to_append["awake"] = None
                    data_to_append["sleepy"] = value
                elif(value >= self.sleepiness_value):
                    if self.data[-1]["awake"] is None:
                        data_to_append["sleepy"] = value # will make the whole valley red
                        # self.data[-1]["awake"] = self.data[-1]["sleepy"] # makes only the downward slope red
                    else:
                        data_to_append["sleepy"] = None
                    data_to_append["awake"] = value
                self.data.append(data_to_append)
                # self.graph_data.append({"name": timestamp, "value": data['value']})


@rx.page(route="/graphs/[id]", title="user graphs")
def graphs() -> rx.Component:
    return rx.vstack(
        navbar(),
        rx.cond(
            GraphState.user_id,
            rx.heading(f"Showing graph for user {GraphState.user_id}"),
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
        ),
        rx.button( # to download the current graph
            "Download Graph",
            on_click=rx.download(
                url="/reflex_logo.png",
                filename="different_name_logo.png",
            ),
        ),
        align_items="center"
    )
