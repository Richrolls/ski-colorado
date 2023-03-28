from fastapi import APIRouter, Depends
from pydantic import BaseModel
from models import AccountIn, AccountOut, AccountList
from queries.accounts import AccountQueries

router = APIRouter()

@router.post("/api/accounts", response_model=AccountOut)
async def create_account(
    account: AccountIn,
    repo: AccountQueries = Depends(),
):
    account = repo.create(account)
    return account

@router.get("/api/accounts", response_model=AccountList)
def get_accounts(
    repo: AccountQueries = Depends()
    ):
    return {
        'accounts': repo.get_all()
    }

@router.get("/api/accounts/{account_id}", response_model=AccountOut)
async def get_account(
    account_id: str,
    repo: AccountQueries = Depends()
    ):
    return repo.get_one(account_id)

@router.delete("/api/accounts/{account_id}", response_model=bool)
def delete_account(
    account_id = str,
    repo: AccountQueries = Depends()
):
    return repo.delete(account_id)
