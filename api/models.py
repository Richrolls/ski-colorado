from bson.objectid import ObjectId
from pydantic import BaseModel
from typing import List, Optional

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
    average_rating: float
    elevation: int
    price: str

class ResortOut(ResortIn):
    id: str

class AccountIn(BaseModel):
    first_name: str
    last_name: str
    user_name: str
    password: str
    email: str
    address: str
    city: str
    state: str
    zipcode: int
    ski: bool
    snowboard: bool
    picture_url: Optional[str] = None

class AccountOut(AccountIn):
   id: str

class CommentIn(BaseModel):
	rating: int
	comment: str
	user_id: str #reference to account id
	resort_id: str #reference to resort id

class CommentOut(CommentIn):
    id: str

class FavoriteIn(BaseModel):
    favorite: bool
    user_id: str #reference to account id
    resort_id: str #reference to resort id

class FavoriteOut(FavoriteIn):
    id: str
