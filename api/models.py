from bson.objectid import ObjectId
from pydantic import BaseModel
from typing import List, Optional
from jwtdown_fastapi.authentication import Token

# class PydanticObjectId(ObjectId):
#     @classmethod
#     def __get_validators__(cls):
#         yield cls.validate

#     @classmethod
#     def validate(cls, value: ObjectId | str) -> ObjectId:
#         if value:
#             try:
#                 ObjectId(value)
#             except:
#                 raise ValueError(f"Not a valid object id: {value}")
#         return value

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

class ResortList(BaseModel):
    resorts: List[ResortOut]

class AccountLogin(BaseModel):
    username: str
    password: str

class AccountForm(BaseModel): #dont DRY/inherit from AccountIn bc this is specific to jwtdown
    username: str
    password: str #user's pw


class AccountIn(BaseModel): #what we send into the database/collection
    first_name: str
    last_name: str
    username: str
    password: str #user's pw
    email: str
    address: str
    city: str
    state: str
    zipcode: int
    ski: bool
    snowboard: bool
    picture_url: Optional[str] = None

class AccountOut(BaseModel): #what the frontend will need to display
    id: str
    first_name: str
    last_name: str
    username: str
    email: str
    address: str
    city: str
    state: str
    zipcode: int
    ski: bool
    snowboard: bool
    picture_url: Optional[str] = None

class AccountToken(Token):
    account: AccountOut

class AccountOutWithHashedPassword(AccountOut):
    hashed_password: str #encrypted user's pw

class AccountList(BaseModel):
    accounts: List[AccountOut]

class CommentIn(BaseModel):
	rating: int
	comment: str
	user_id: str #reference to account id
	resort_id: str #reference to resort id

class CommentOut(CommentIn):
    id: str

class CommentList(BaseModel):
    comments: List[CommentOut]

class FavoriteIn(BaseModel):
    favorite: bool
    user_id: str #reference to account id
    resort_id: str #reference to resort id

class FavoriteOut(FavoriteIn):
    id: str

class FavoriteList(BaseModel):
    favorites: List[FavoriteOut]
