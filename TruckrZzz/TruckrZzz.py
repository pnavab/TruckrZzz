"""Welcome to Reflex! This file outlines the steps to create a basic app."""

from rxconfig import config
from TruckrZzz import *
from TruckrZzz.components.navbar import navbar
# from TruckrZzz.graphs import *
from TruckrZzz.dashboard import *
from TruckrZzz.components.footer import footer
from TruckrZzz.webcam import *
from sqlmodel import Field, SQLModel, select, JSON
from sqlalchemy import Column, DateTime
import sqlalchemy
from fastapi import FastAPI, Request
import reflex as rx
import datetime

class HeartRate(rx.Model, table=True):
    id: int = Field(default=None, primary_key=True)
    value: int
    device_id: str
    heartrate: int
    created_at: datetime.datetime = Field(
        default=None,
        sa_column=Column(
            "created_at",
            DateTime(timezone=True),
            server_default=sqlalchemy.func.now(),
        ),
    )
HeartRate.create_all()


class State(rx.State):
    """The app state."""

def truck_sound_effect():
    return rx.hstack(
        rx.script(
            """
            function playAudio() { var audio = new Audio("/truck-honk.mp3"); audio.play() };
            """,
            on_ready=rx.call_script("playAudio()")
        ),
    )

@rx.page(route="/", title="home")
def index() -> rx.Component:
    return rx.vstack(
        rx.audio(url="/truck-honk.mp3", playing=True),
        navbar(),
        rx.vstack(
            rx.box(
                rx.heading(
                    rx.text("Saving Lives One ",margin_bottom="20px"),
                    rx.text("ـﮩ٨ـHEARTBEATـﮩ٨ـ", color="#a70000", margin_bottom="20px", font_size="1.2em"),
                    rx.text("at a Time"),
                    font_size="1.5em",
                    text_align="center",
                    color="#1d2d44"
                ),
                padding="5px",
                margin_top="5px",
            ),
            rx.box(
                rx.image(src="/truck2.gif",width="100vw",height="40vh"),
                border_radius="15px",
            ),  
            rx.scroll_area(
                rx.hstack(
                    rx.vstack(
                        rx.box(
                            rx.image(src="/webcam.png", width="100%", height="100%", fit="cover"),
                            width="100%",
                            height="35%"
                        ),
                        rx.spacer(),
                        rx.heading("Webcam Integration",text_align="center", padding="5px", margin_top="15px", size="6"),
                        rx.fragment(
                            rx.box(
                                rx.text("Our project incorporates facial recognition and landmarking technology leveraging the webcam to monitor the sleepiness level of truck drivers in real time. By analyzing facial cues and patterns, the system assesses signs of drowsiness, alerting the driver and playing a warning sound to wake the driver up. This innovative feature not only prioritizes the well-being of drivers but also enhances overall fleet management efficiency.", size="3", text_align="center"),
                                margin_bottom="5px",
                                margin_top="5px",
                                margin_left="10px",
                                margin_right="10px",
                                size="8"
                            ),
                        ),
                        rx.spacer(),
                        bg="#d4dbe5",
                        align_items="center",
                        width="27vw",
                        height="60vh",
                        margin_bottom="20px",
                        margin_top="20px",
                        margin_right="20px",
                        margin_left="20px",
                        border_radius="8px",
                        overflow_x="wrap",
                        overflow_y="scroll"
                    ),
                    rx.spacer(),
                    rx.vstack(
                        rx.heading("Livestream Heartrate", text_align="center", padding="5px", margin_top="30px", size="6"),
                        rx.fragment(
                            rx.box(
                                rx.text("Our project integrates a real-time heart rate monitor to continuously track the heart rate of truck drivers during their journeys. By leveraging this data, our system provides insight into the driver's stress levels and  fatigue. With our advanced heart rate monitoring feature, we prioritize the health and performance of truck drivers, contributing to enhanced fleet management and overall operational excellence.", size="3", text_align="center"),
                                margin_bottom="5px",
                                margin_top="5px",
                                margin_left="10px",
                                margin_right="10px",
                                size="8"
                            ),
                        ),
                        rx.spacer(),
                        rx.box(
                            rx.image(src="/heart-rate-banner.png", width="100%", height="100%", fit="cover"),
                            width="100%",
                            height="35%"
                        ),
                        bg="#d4dbe5",
                        align_items="center",
                        width="27vw",
                        height="60vh",
                        margin_bottom="20px",
                        margin_top="20px",
                        margin_right="20px",
                        margin_left="20px",
                        border_radius="8px",
                        overflow_x="wrap",
                        overflow_y="scroll"
                    ),
                    rx.spacer(),
                    rx.vstack(
                        rx.box(
                            rx.image(src="/Truck-park.png", width="100%", height="100%", fit="cover"),
                            width="100%",
                            height="35%"
                        ),
                        rx.spacer(),
                        rx.heading("Saving Lives",text_align="center", padding="5px", margin_top="15px", size="6"),
                        rx.fragment(
                            rx.box(
                                rx.text("Approximately 40% of all heavy truck accidents are attributed to fatigue. With our webcam and livestream heart rate monitoring features, we aim to revolutionize truck driver safety. By tracking drivers' heart rates in real-time, we can detect signs of fatigue and alertness levels. Through this technology, we intervene proactively, providing timely alerts and support to keep drivers awake and alert during their shifts. We aspire to significantly reduce the percentage of truck driver deaths caused by sleepiness, fostering a safer and more sustainable future for the transportation industry.", size="3", text_align="center"),
                                margin_bottom="5px",
                                margin_top="5px",
                                margin_left="10px",
                                margin_right="10px",
                                size="8"
                            ),
                        ),
                        rx.spacer(),
                        bg="#d4dbe5",
                        align_items="center",
                        width="27vw",
                        height="60vh",
                        margin_bottom="20px",
                        margin_top="20px",
                        margin_right="20px",
                        margin_left="20px",
                        border_radius="8px",
                        overflow_x="wrap",
                        overflow_y="scroll"
                    ),
                    rx.spacer(),
                    rx.vstack(
                        rx.heading("The Future", text_align="center", padding="5px", margin_top="30px", size="6"),
                        rx.fragment(
                            rx.box(
                                rx.text("At TruckrZzz, our vision extends beyond the trucking industry to encompass all drivers and vehicles. Recognizing that accidents caused by fatigue are not exclusive to commercial truck drivers, we're committed to expanding our application to serve all motorists. Our goal is to leverage the same innovative webcam and livestream heart rate monitoring features and adapt them for use in any type of vehicle. With our comprehensive approach to driver safety, we're dedicated to creating safer roads for everyone, regardless of the vehicle they operate.", size="3", text_align="center"),
                                margin_bottom="5px",
                                margin_top="5px",
                                margin_left="10px",
                                margin_right="10px",
                                size="8"
                            ),
                        ),
                        rx.spacer(),
                        rx.box(
                            rx.image(src="/happy-driver.png", width="100%", height="100%", fit="cover"),
                            width="100%",
                            height="35%"
                        ),
                        bg="#d4dbe5",
                        align_items="center",
                        width="27vw",
                        height="60vh",
                        margin_bottom="20px",
                        margin_top="20px",
                        margin_right="20px",
                        margin_left="20px",
                        border_radius="8px",
                        overflow_x="wrap",
                        overflow_y="scroll"
                    ),
                ),
                scrollbars="horizontal",
                background_color="#f2f2f2",
                border_radius="15px",
                style={"height": "70vh"},
                margin_bottom="9%"
            ),
            width="80%",
            align="center",
            spacing="7",
            font_size="2em",
            margin_top="20px",

        ),
        footer(),
        width="100%",
        height="100vh",
        align_items="center",
    )


app = rx.App()
app.add_cors()

# @app.api.post
async def api_test(request_body: Request):
    json_body = await request_body.json()
    val = json_body['val']
    device_id = json_body['device_id']
    output = None
    if val > 120:
        output = 9
    elif val > 100:
        output = 8
    elif val > 90:
        output = 7
    elif val > 80:
        output = 6
    elif val > 70:
        output = 5
    elif val > 60:
        output = 4
    elif val > 55:
        output = 3
    elif val > 50:
        output = 2
    else:
        output = 1
    with rx.session() as session:
        session.add(HeartRate(value=output, device_id=device_id, heartrate=val))
        session.commit()
    return {"processed": "true", "output": output}



# app.api.add_api_route("/", api_test)
app.api.add_api_route("/", api_test, methods=["POST"])