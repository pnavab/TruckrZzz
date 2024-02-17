import reflex as rx
import cv2
import asyncio
from PIL import Image
from base64 import b64encode
from TruckrZzz.components.navbar import navbar
from TruckrZzz.landmark import SleepDetector

detector = SleepDetector(visualize=True)
class WebcamState(rx.State):
    # Assuming `processed_frame` is a variable that holds the processed frame data
    processed_frame: str = ""
    drowsy: bool

    # def watch_for_drowsy(self):
    #     if self.drowsy:
    #         return rx.call_script(
    #             "playFromStart(button_sfx)"
    #         ),

    def update_drowsy_state(self, new):
        self.drowsy = new

    @rx.background
    async def capture_and_process_webcam(self):
        cap = cv2.VideoCapture(cv2.CAP_DSHOW)  # Open the webcam
        while cap.isOpened():
            ret, frame = cap.read()  # Read a frame from the webcam
            if ret:
                # Process the frame with OpenCV here
                # processed_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
                # # Encode the processed frame to base64
                # _, buffer = cv2.imencode('.jpg', processed_frame)
                # async with self:
                #     self.processed_frame = b64encode(buffer).decode('utf-8')
                out = detector.analyze_frame(frame)

                frame = cv2.cvtColor(out, cv2.COLOR_BGR2RGB)
                im_pil = Image.fromarray(frame)
                async with self:
                    self.update_drowsy_state(detector.drowsy)
                    self.processed_frame = im_pil
                yield  # Yield control to allow the frontend to update
                await asyncio.sleep(0.01)  # Small sleep to allow other tasks to run
            # Exit loop on condition
            if cv2.waitKey(1) & 0xFF == ord('q'):
                break
        cap.release()  # Release the webcam
        cv2.destroyAllWindows()

def sound_effect_demo():
    return rx.hstack(
        rx.script(
            """
            var button_sfx = new Audio("/scream.mp3")
            button_sfx.load()
            button_sfx.play()
            """
        ),
    )

def sound_stop():
    return rx.hstack(
        rx.script(
            """
            var button_sfx = new Audio("/scream.mp3")
            button_sfx.pause()
            """
        ),
    )

@rx.page(route="/webcam", title="webcam")
def webcam_page():
    base64_string = ""
    return rx.vstack(
        navbar(),
        rx.button("Start", on_click=WebcamState.capture_and_process_webcam),
        rx.image(src=WebcamState.processed_frame),
        rx.cond(
            WebcamState.drowsy,
            sound_effect_demo(),
            rx.text("awake.....")
        )
    )