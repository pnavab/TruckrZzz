from imutils import face_utils
import imutils
import dlib
import cv2
import numpy as np

import os

EYE_ASPECT_RATIO_THRESH = 1.0

CONSECUTIVE_WARNING_THRESH = 20

DETECTOR = dlib.get_frontal_face_detector()
PREDICTOR = dlib.shape_predictor("./TruckrZzz/shape_predictor_68_face_landmarks.dat")

(L_START, L_END) = face_utils.FACIAL_LANDMARKS_68_IDXS["left_eye"]
(R_START, R_END) = face_utils.FACIAL_LANDMARKS_68_IDXS["right_eye"]


def compute_eye_aspect_ratio(eye_coords):
    eye_coords = np.asarray(eye_coords)
    left_vert = np.linalg.norm(eye_coords[1] - eye_coords[5])
    right_vert = np.linalg.norm(eye_coords[2] - eye_coords[4])
    horz = np.linalg.norm(eye_coords[0] - eye_coords[3])
    ear = (left_vert + right_vert) / horz
    return ear


class SleepDetector():
    def __init__(self, visualize):
        self.warning_count = 0
        self.cap = cv2.VideoCapture(0)
        self.drowsy = False
        self.visualize = visualize

    def analyze_frame(self, frame):
        frame = imutils.resize(frame, width=450)
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        # Get the closest subject face
        subjects = DETECTOR(gray, 0)
        if not subjects:
            return frame

        # Determine facial landmarks
        shape = PREDICTOR(gray, subjects[0])
        shape = face_utils.shape_to_np(shape)  # converting to NumPy Array

        left_eye_coords = shape[L_START:L_END]
        right_eye_coords = shape[R_START:R_END]

        left_eye_aspect_ratio = compute_eye_aspect_ratio(
            left_eye_coords)
        right_eye_aspect_ratio = compute_eye_aspect_ratio(
            right_eye_coords)
        total_eye_aspect_ratio = left_eye_aspect_ratio + right_eye_aspect_ratio
        if total_eye_aspect_ratio < EYE_ASPECT_RATIO_THRESH:
            self.warning_count += 1
        else:
            self.warning_count = 0
            self.drowsy = False

        self.drowsy = self.warning_count > CONSECUTIVE_WARNING_THRESH

        if self.visualize:
            left_eye_outline = cv2.convexHull(left_eye_coords)
            right_eye_outline = cv2.convexHull(right_eye_coords)
            cv2.drawContours(frame, [left_eye_outline], -1, (0, 0, 255), 1)
            cv2.drawContours(
                frame, [right_eye_outline], -1, (0, 0, 255), 1)
            if self.drowsy:
                cv2.putText(frame, "****************ALERT!****************", (10, 30),
                            cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 0, 255), 2)
                cv2.putText(frame, "****************ALERT!****************", (10, 325),
                            cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 0, 255), 2)
        return frame


# detector = SleepDetector(visualize=True)
# cap = cv2.VideoCapture(0)
# while True:
#     _, frame = cap.read()
#     out = detector.analyze_frame(frame)

#     cv2.imshow("Frame", out)
#     if cv2.waitKey(1) & 0xFF == ord('q'):
#         break

# cap.release()
# cv2.destroyAllWindows()
