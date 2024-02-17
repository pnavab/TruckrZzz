"""Welcome to Reflex! This file outlines the steps to create a basic app."""

from rxconfig import config
from TruckrZzz import *
from TruckrZzz.components.navbar import navbar
from TruckrZzz.graphs import *
from TruckrZzz.dashboard import *
from TruckrZzz.components.footer import footer

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
                rx.heading("Saving Lives One Heartbeat at a Time"),
                padding = "5px",
            ), 
            rx.box(
                background_color="var(--plum-3)",
                border_radius="15px",
                width="100%",
                height="40vh"
            ),  
            rx.scroll_area(
                rx.hstack(
                    rx.box(
                        rx.box(
                            background_color="var(--plum-3)",
                            width="8em",
                            height="35%"
                        ),
                        rx.heading("Webcam Integration", text_align="center"),
                        rx.fragment(
                            rx.box(
                                rx.text("This is some sample text for card 1. This will be where the description of our webcam integration goes. Here are some extra sentences.",size="2", text_align="center"),
                                margin_bottom="5px",
                                margin_top="5px",
                                margin_left="5px",
                                margin_right="5px"
                            ),
                        ),
                        bg="white",
                        width="8em",
                        height="35vh",
                        # border_radius="15px",
                        margin_bottom="20px",
                        margin_top="20px",
                        margin_right="20px",
                        margin_left="20px",
                        
                    ),
                    rx.spacer(),
                    rx.box(
                        rx.box(
                            background_color="var(--plum-3)",
                            width="8em",
                            height="35%"
                        ),
                        rx.heading("Livestream Heartrate",text_align="center"),
                        rx.fragment(
                            rx.box(
                                rx.text("This is some sample text for card 1. This will be where the description of our webcam integration goes. Here are some extra sentences.",size="2", text_align="center"),
                                margin_bottom="5px",
                                margin_top="5px",
                                margin_left="5px",
                                margin_right="5px"
                            ),
                        ),
                        bg="white",
                        width="8em",
                        height="35vh",
                        # border_radius="15px",
                        margin_bottom="20px",
                        margin_top="20px",
                        margin_right="20px",
                        margin_left="20px",
                    ),
                    rx.spacer(),
                    rx.box(
                        rx.box(
                            background_color="var(--plum-3)",
                            width="8em",
                            height="35%"
                        ),
                        rx.heading("Additional Feature",text_align="center"),
                        rx.fragment(
                            rx.box(
                                rx.text("This is some sample text for card 1. This will be where the description of our webcam integration goes. Here are some extra sentences.",size="2", text_align="center"),
                                margin_bottom="5px",
                                margin_top="5px",
                                margin_left="5px",
                                margin_right="5px"
                            ),
                        ),
                        bg="white",
                        width="8em",
                        height="35vh",
                        # border_radius="15px",
                        margin_bottom="20px",
                        margin_top="20px",
                        margin_right="20px",
                        margin_left="20px",
                    ),
                    rx.spacer(),
                    rx.box(
                        rx.box(
                            background_color="var(--plum-3)",
                            width="8em",
                            height="35%"
                        ),
                        rx.heading("Additional Feature",text_align="center"),
                        rx.fragment(
                            rx.box(
                                rx.text("This is some sample text for card 1. This will be where the description of our webcam integration goes. Here are some extra sentences.",size="2", text_align="center"),
                                margin_bottom="5px",
                                margin_top="5px",
                                margin_left="5px",
                                margin_right="5px"
                            ),
                        ),
                        bg="white",
                        width="8em",
                        height="35vh",
                        # border_radius="15px",
                        margin_bottom="20px",
                        margin_top="20px",
                        margin_right="20px",
                        margin_left="20px",
                    ),
                ),
                scrollbars="horizontal",
                background_color="grey",
                border_radius="15px",
                style={"height": "40vh"},
                margin_bottom="20px"
            ),     
            width = "80%",
            align="center",
            spacing="7",
            font_size="2em",
            margin_top ="20px",
           
        ),
        
        width = "100%",
        height="100vh",
        align_items="center",
        
        
        # rx.vstack(
        #     rx.heading("Welcome to Reflex!", size="9"),
        #     rx.text("Get started by editing ", rx.code(filename)),
        #     rx.button(
        #         "Check out our docs!",
        #         on_click=lambda: rx.redirect(docs_url),
        #         size="4",
        #     ),
        #     align="center",
        #     spacing="7",
        #     font_size="2em",
        # ),
        # height="100vh",
        # align_items="center"
    )


app = rx.App()
app.add_page(index)
