from fastapi import (
    APIRouter,
    Depends,
    Request,
    Response,
    status,
    HTTPException,
)
from pydantic import BaseModel
from models import (
    AccountIn,
    AccountOut,
    AccountOutPublic,
    # AccountList,
    AccountForm,
    AccountToken,
)
from queries.accounts import AccountsRepo, DuplicateAccountError
from authenticator import authenticator


class HttpError(BaseModel):
    detail: str


router = APIRouter()


@router.post("/api/accounts", response_model=AccountToken | HttpError)
async def create_account(
    info: AccountIn,
    request: Request,
    response: Response,
    repo: AccountsRepo = Depends(),
):
    if info.picture_url == "":
        info.picture_url = "https://i.imgur.com/J3ranqA.png"
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
    account: AccountOut = Depends(authenticator.try_get_current_account_data),
) -> AccountToken | None:
    if account and authenticator.cookie_name in request.cookies:
        return {
            "access_token": request.cookies[authenticator.cookie_name],
            "type": "Bearer",
            "account": account,
        }


# @router.get("/api/accounts", response_model=AccountList)
# def get_accounts(repo: AccountsRepo = Depends()):
#     return {"accounts": repo.get_all()}


@router.get("/api/accounts/{account_id}", response_model=AccountOutPublic)
async def get_account(
    account_id: str,
    repo: AccountsRepo = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return repo.get_one(account_id)


@router.delete("/api/accounts/{account_id}", response_model=bool)
def delete_account(
    account_id=str,
    repo: AccountsRepo = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data)
    ):
    return repo.delete(account_id, id=account_data["id"])
