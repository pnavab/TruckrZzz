from TruckrZzz import styles

import reflex as rx

class Footer(rx.Component):
    def render(self):
        return rx.box(
            rx.center(
                rx.link("Home", href="/", color="rgb(107,99,246)"),
                rx.spacer(),
                rx.link("Dashboard", href="/dashboard", color="rgb(107,99,246)"),
                rx.spacer(),
                rx.link("Graphs", href="/graphs/6", color="rgb(107,99,246)"),
                margin_right="15px",
                margin_left="15px"
            ),
            align_items="center",
            padding="1em",
            background_color="White",
            width="100%",
            bottom="0",
        )

def footer() -> rx.Component:
    return Footer().render()