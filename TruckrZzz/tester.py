import reflex as rx
import asyncio
from TruckrZzz.components.navbar import *


class FlashingState(rx.State):
    color: str = "white"
    flash: bool

    @rx.background
    async def flash_background(self):
        while True:
            async with self:
                self.color = "red" if self.color == "white" else "white"
            await asyncio.sleep(0.1)  # Change color every 0.5 seconds


@rx.page(route="/tester", title="tester")
def tester():
    return rx.vstack(
        navbar(),
        rx.vstack(
            # ... Your content here ...
            background_color="red",
            width="100%",
            height="100%",
        )


    )
