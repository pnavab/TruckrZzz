from TruckrZzz import styles

import reflex as rx

class Footer(rx.Component):
    def render(self):
        return rx.hstack(
            rx.spacer(),
            rx.text("Made with 💩 by Pablo, Sarah, Banyar, and Marcus", size="4"),
            rx.spacer(),
            align_items="center",
            padding="1em",
            background_color="#f2f2f2",
            width="100%",
            bottom="0",
        )

def footer() -> rx.Component:
    return Footer().render()