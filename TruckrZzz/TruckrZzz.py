"""Welcome to Reflex! This file outlines the steps to create a basic app."""

from rxconfig import config
from TruckrZzz import *
from TruckrZzz.components.navbar import navbar
from TruckrZzz.graphs import *
from TruckrZzz.dashboard import *
from TruckrZzz.components.footer import footer
from TruckrZzz.webcam import *
from fastapi import FastAPI, Request
import reflex as rx

docs_url = "https://reflex.dev/docs/getting-started/introduction"
filename = f"{config.app_name}/{config.app_name}.py"


class State(rx.State):
    """The app state."""


def index() -> rx.Component:
    return rx.vstack(
        navbar(),
        rx.vstack(
            rx.box(
                rx.heading("Saving Lives One Heartbeat at a Time", size="8"),
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
                            rx.image(src="/webcam.png",
                                     width="100", height="100%", object_fit="cover"),
                            width="100%",
                            height="35%"
                        ),
                        rx.spacer(),
                        rx.heading("Webcam Integration",text_align="center", padding="5px", margin_top="15px", size="8"),
                        rx.fragment(
                            rx.box(
                                rx.text("Our project incorporates facial recognition and landmarking technology leveraging the webcam to monitor the sleepiness level of truck drivers in real time. By analyzing facial cues and patterns, the system assesses signs of drowsiness, alerting the driver and playing a warning sound to wake the driver up. This innovative feature not only prioritizes the well-being of drivers but also enhances overall fleet management efficiency.", size="2", text_align="center"),
                                margin_bottom="5px",
                                margin_top="5px",
                                margin_left="10px",
                                margin_right="10px",
                                size="8"
                            ),
                        ),
                        rx.spacer(),
                        bg="white",
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
                        rx.heading("Livestream Heartrate",text_align="center",padding="5px", margin_top="15px", size="8"),
                        rx.fragment(
                            rx.box(
                                rx.text("Our project integrates a real-time heart rate monitor to continuously track the heart rate of truck drivers during their journeys. By leveraging this data, our system provides insight into the driver's stress levels and  fatigue. With our advanced heart rate monitoring feature, we prioritize the health and performance of truck drivers, contributing to enhanced fleet management and overall operational excellence.", size="2", text_align="center"),
                                margin_bottom="5px",
                                margin_top="5px",
                                margin_left="10px",
                                margin_right="10px",
                                size="7"
                            ),
                        ),
                        rx.spacer(),
                        rx.box(
                            rx.image(src="/heart-rate-banner.png",width="100%",height="100%", margin_top="5px", margin_right="5px", margin_left="5px"),
                            width="100%",
                            height="40%",
                            bottom="0"
                        ),
                        bg="white",
                        width="27vw",
                        height="60vh",
                        margin_bottom="20px",
                        margin_top="20px",
                        margin_right="20px",
                        margin_left="20px",
                        align_items="center",
                        border_radius="8px",
                        _hover={"transform": "rotate(0)"}
                    ),
                    rx.spacer(),
                    rx.vstack(
                        rx.box(
                            rx.image(src="/webcam.png",
                                     width="100%", height="100%", margin_top="5px", margin_right="5px", margin_left="5px"),
                            width="100%",
                            height="25%"
                        ),
                        rx.spacer(),
                        rx.heading("Another Good Point",text_align="center", padding="5px", margin_top="15px", size="8"),
                        rx.fragment(
                            rx.box(
                                rx.text("this is some sample text for another card we will have on here.", size="2", text_align="center"),
                                margin_bottom="5px",
                                margin_top="5px",
                                margin_left="10px",
                                margin_right="10px",
                                size="7"
                            ),
                        ),
                        bg="white",
                        align_items="center",
                        width="27vw",
                        height="60vh",
                        margin_bottom="20px",
                        margin_top="20px",
                        margin_right="20px",
                        margin_left="20px",

                    ),
                    rx.spacer(),
                    rx.box(
                        rx.box(
                            rx.image(src="/webcam.png",
                                     width="100%", height="100%", margin_top="5px", margin_right="5px", margin_left="5px"),
                            width="8em",
                            height="25%"
                        ),
                        rx.heading("Another Good Point",text_align="center", padding="5px", margin_top="15px", size="8"),
                        rx.fragment(
                            rx.box(
                                rx.text(
                                    "This is some sample text for card 1. This will be where the description of our webcam integration goes. Here are some extra sentences.", size="2", text_align="center"),
                                margin_bottom="5px",
                                margin_top="5px",
                                margin_left="5px",
                                margin_right="5px",
                                size="7"
                            ),
                        ),
                        bg="white",
                        align_items="center",
                        width="27vw",
                        height="60vh",
                        margin_bottom="20px",
                        margin_top="20px",
                        margin_right="20px",
                        margin_left="20px",
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
app.add_page(index)

# @app.api.post
async def api_test(request_body: Request):
    json_body = await request_body.json()
    return {"processed": json_body}



# app.api.add_api_route("/", api_test)
app.api.add_api_route("/", api_test, methods=["POST"])