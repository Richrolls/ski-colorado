from fastapi import APIRouter, Depends, Request, Response, status, HTTPException
from pydantic import BaseModel
from models import AccountIn, AccountOut, AccountList
from queries.accounts import AccountsRepo, DuplicateAccountError
from jwtdown_fastapi.authentication import Token
from authenticator import authenticator
from typing import Optional

class AccountForm(BaseModel):
    first_name: str
    last_name: str
    user_name: str
    password: str #user's pw
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

class HttpError(BaseModel):
    detail: str

router = APIRouter()

@router.post('/api/accounts', response_model=AccountToken | HttpError)
async def create_account(
    info: AccountIn,
    request: Request,
    response: Response,
    repo: AccountsRepo = Depends(),
):
    hashed_password = authenticator.hash_password(info.password)
    try:
        account = repo.create(info, hashed_password)
    except DuplicateAccountError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot create an account with those credentials",
        )
    form = AccountForm(username=info.email, password=info.password)
    token = await authenticator.login(response, request, form, repo)
    return AccountToken(account=account, **token.dict())

# @router.post("/api/accounts", response_model=AccountOut)
# async def create_account(
#     account: AccountIn,
#     repo: AccountQueries = Depends(),
# ):
#     account = repo.create(account)
#     return account

@router.get("/api/accounts", response_model=AccountList)
def get_accounts(
    repo: AccountsRepo = Depends()
    ):
    return {
        'accounts': repo.get_all()
    }

@router.get("/api/accounts/{account_id}", response_model=AccountOut)
async def get_account(
    account_id: str,
    repo: AccountsRepo = Depends()
    ):
    return repo.get_one(account_id)

@router.delete("/api/accounts/{account_id}", response_model=bool)
def delete_account(
    account_id = str,
    repo: AccountsRepo = Depends()
):
    return repo.delete(account_id)
