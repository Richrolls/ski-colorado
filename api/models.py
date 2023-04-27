import pydantic, typing
from bson.objectid import ObjectId
from pydantic import BaseModel
from typing import List, Optional, Union
from jwtdown_fastapi.authentication import Token
from fastapi import Path


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
    address: Optional[str]
    city: str
    state: str
    zipcode: int
    coordinates: str
    name: str
    photo_url: str
    average_rating: float
    elevation: int
    price: int
    vertical_drop: int
    num_trails: int
    pass_type: Optional[str] = None
    resort_website: Optional[str] = None


class ResortOut(ResortIn):
    id: str


class ResortList(BaseModel):
    resorts: List[ResortOut]


class AccountLogin(BaseModel):
    username: str
    password: str


class AccountForm(BaseModel):
    username: str
    password: str


class AccountIn(BaseModel):
    first_name: str
    last_name: str
    username: str
    password: str
    email: str
    address_1: str
    address_2: Optional[str] = None
    city: str
    state: str
    zipcode: int
    ski: bool = False
    snowboard: bool = False
    picture_url: Optional[str] = None


class AccountOut(BaseModel):
    id: str
    first_name: str
    last_name: str
    username: str
    email: str
    address_1: str
    address_2: str
    city: str
    state: str
    zipcode: int
    ski: bool
    snowboard: bool
    picture_url: Optional[str] = None


class AccountOutPublic(BaseModel):
    id: str
    username: str
    city: str
    state: str
    ski: bool
    snowboard: bool
    picture_url: Optional[str] = None


class AccountToken(Token):
    account: AccountOut


class AccountOutWithHashedPassword(AccountOut):
    hashed_password: str  # encrypted user's pw


class AccountList(BaseModel):
    accounts: List[AccountOutPublic]


class CommentIn(BaseModel):
    rating: int
    comment: str


class CommentOut(CommentIn):
    id: str
    user_id: str
    resort_id: str


class CommentList(BaseModel):
    comments: List[CommentOut]


class Favorite(BaseModel):
    id: str
    user_id: str
    resort_id: str


class FavoriteList(BaseModel):
    favorites: List[Favorite]
