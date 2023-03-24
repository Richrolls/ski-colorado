from pydantic import BaseModel
from queries.client import Queries

class DuplicateAccountError(ValueError):
    pass

class AccountIn(BaseModel):
    firstname: str
    lastname: str
    username: str
    password: str
    email: str
    address_line_1: str
    address_line_2: str #how to make optional?
    city: str
    state: str #str? How to enforce 2 letters?
    #don't think we need zip field
    ski_check: bool
    snowboard_check: bool
    picture_url: str

class AccountOut(BaseModel):
    id: str
    firstname: str
    lastname: str
    username: str
    password: str
    email: str
    address_line_1: str
    address_line_2: str #how to make optional?
    city: str
    state: str #str? How to enforce 2 letters?
    #don't think we need zip field
    ski_check: bool
    snowboard_check: bool
    picture_url: str

class AccountOutWithPassword(AccountOut):
    hashed_password: str

class AccountQueries(Queries):
    # region properties. What are those?

    def get(self, email: str) ->AccountOutWithPassword:
        pass
        #collapsed code in video here


    def create(self, info: AccountIn, hashed_password: str) -> AccountOutWithPassword:
        pass
        #collapsed code in video here
