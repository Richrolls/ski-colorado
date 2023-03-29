from fastapi import APIRouter, Depends, Request, Response, status, HTTPException
from pydantic import BaseModel
from models import AccountIn, AccountOut, AccountList, AccountForm, AccountToken
from queries.accounts import AccountsRepo, DuplicateAccountError
from authenticator import authenticator
from typing import Optional



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
    form = AccountForm(username=info.username, password=info.password)
    token = await authenticator.login(response, request, form, repo)
    return AccountToken(account=account, **token.dict())

@router.get("/token", response_model=AccountToken | None)
async def get_token(
    request: Request,
    account: AccountOut = Depends(authenticator.try_get_current_account_data)
) -> AccountToken | None:
    if account and authenticator.cookie_name in request.cookies:
        return {
            "access_token": request.cookies[authenticator.cookie_name],
            "type": "Bearer",
            "account": account,
        }

#Have to add post /token and Delete /token function

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
    return repo.get(account_id)

@router.delete("/api/accounts/{account_id}", response_model=bool)
def delete_account(
    account_id = str,
    repo: AccountsRepo = Depends()
):
    return repo.delete(account_id)