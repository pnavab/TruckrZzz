from TruckrZzz import styles

import reflex as rx

class Footer(rx.Component):
    def render(self):
        return rx.hstack(
            rx.box(
                "Example",
                bg = "blue",
                border_radius="3px",
                width="100%"
            ),
            rx.spacer(),
            rx.center(
                rx.spacer(),
                rx.link("Home", href="/"),
                rx.spacer(),
                rx.link("Graph", href="/")
            ),
            width="100%"
        )

def footer() -> rx.Component:
    return Footer().render()