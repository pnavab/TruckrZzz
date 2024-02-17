import reflex as rx
import cv2
import asyncio
from base64 import b64encode
from TruckrZzz.components.navbar import navbar

class WebcamState(rx.State):
    # Assuming `processed_frame` is a variable that holds the processed frame data
    processed_frame: str = ""

    @rx.background
    async def capture_and_process_webcam(self):
        cap = cv2.VideoCapture(cv2.CAP_DSHOW)  # Open the webcam
        while cap.isOpened():
            ret, frame = cap.read()  # Read a frame from the webcam
            if ret:
                # Process the frame with OpenCV here
                processed_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
                # Encode the processed frame to base64
                _, buffer = cv2.imencode('.jpg', processed_frame)
                async with self:
                    self.processed_frame = b64encode(buffer).decode('utf-8')
                yield  # Yield control to allow the frontend to update
                await asyncio.sleep(0)  # Small sleep to allow other tasks to run
            # Exit loop on condition
            if cv2.waitKey(1) & 0xFF == ord('q'):
                break
        cap.release()  # Release the webcam
        cv2.destroyAllWindows()

@rx.page(route="/webcam", title="webcam")
def webcam_page():
    return rx.vstack(
        navbar(),
        rx.button("Start", on_click=WebcamState.capture_and_process_webcam),
        rx.video(
            url=f"data:image/jpeg;base64,{WebcamState.processed_frame}",
            width="400px",
            height="auto",
        ),
    )