from bson.objectid import ObjectId
from pydantic import BaseModel
from typing import List

class PydanticObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, value: ObjectId | str) -> ObjectId:
        if value:
            try:
                ObjectId(value)
            except:
                raise ValueError(f"Not a valid object id: {value}")
        return value

class ResortIn(BaseModel):
    address: str
    city: str
    state: str
    zipcode: int
    name: str
    photo_url: str
    Average_rating: float
    Elevation: int
    Price: str

class ResortOut(ResortIn):
    id: str


