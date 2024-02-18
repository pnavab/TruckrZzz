from typing import List
import numpy as np

from uagents import Context, Model, Protocol, Agent


class FramePackage(Model):
    ret: bool
    frame: np.ndarray

class PreprocessFrameRequest(Model):
    frame: np.ndarray
    visualize: bool

query_proto = Protocol()

@query_proto.on_message(model=PreprocessFrameRequest, replies=FramePackage)
async def handle_query_request(ctx: Context, sender: str, msg: PreprocessFrameRequest):
    # Preprocess
    

class Preprocess(Model):
    pass

class PreprocessReturnFrame(Model):
    frame: np.ndarray

class Process(Model):
    pass

class ProcessRequest(Model):
    frame: np.ndarray
    visualize: bool


class ProcessReturn(Model):
    drowsy: bool
    annotated_frame:Optional[np.ndarray]


query_proto = Protocol()
