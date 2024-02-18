import reflex as rx
import cv2
import asyncio
from PIL import Image
from TruckrZzz.components.navbar import navbar
from TruckrZzz.landmark import SleepDetector

detector = SleepDetector(visualize=False)


class WebcamState(rx.State):
    # Assuming `processed_frame` is a variable that holds the processed frame data
    processed_frame: str = ""
    drowsy: bool = False

    def update_drowsy_state(self, new):
        self.drowsy = new

    @rx.background
    async def capture_and_process_webcam(self):
        cap = cv2.VideoCapture(0)  # Open the webcam
        while cap.isOpened():
            ret, frame = cap.read()  # Read a frame from the webcam
            if ret:
                # Process the frame with OpenCV here
                out = detector.analyze_frame(frame)
                frame = cv2.cvtColor(out, cv2.COLOR_BGR2RGB)
                im_pil = Image.fromarray(frame)
                async with self:
                    self.update_drowsy_state(detector.drowsy)
                    self.processed_frame = im_pil
                yield  # Yield control to allow the frontend to update
                # Small sleep to allow other tasks to run
                await asyncio.sleep(0.01)

# class ToggleState(rx.State):
#     show_red: bool = False

#     @rx.background
#     async def toggle_background(self):
#         while True:
#             async with self:
#                 self.show_red = not self.show_red
#             await asyncio.sleep(0.5)


class FlashingState(rx.State):
    flashing_color: str = "red"

    async def toggle_flashing(self):
        while True:
            self.set_flashing_color(
                "red" if self.flashing_color == "white" else "white")
            await asyncio.sleep(0.01)


@rx.page(route="/webcam", title="webcam", on_load=WebcamState.capture_and_process_webcam)
def webcam_page():
    return rx.vstack(
        navbar(),
        # rx.image(src=WebcamState.processed_frame),
        rx.audio(url="/alarm_long.mp3", playing=WebcamState.drowsy),
        rx.cond(WebcamState.drowsy, rx.box(
            "Flashing Box",
            background_color=FlashingState.flashing_color
        ), rx.box("hi", background_color="white"))
    )
