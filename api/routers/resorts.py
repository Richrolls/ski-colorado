from fastapi import APIRouter, Depends
from pydantic import BaseModel
from models import ResortIn, ResortOut, ResortList
from queries.resorts import ResortQueries
from authenticator import authenticator

router = APIRouter()

@router.post("/api/resorts", response_model=ResortOut)
async def create_resort(
    resort: ResortIn,
    repo: ResortQueries = Depends(),
):
    resort = repo.create(resort)
    return resort

@router.get("/api/resorts", response_model=ResortList)
def get_resorts(
    repo: ResortQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
    ):
        return {
            'resorts': repo.get_all()
        }


@router.get("/api/resorts/{resort_id}", response_model=ResortOut)
async def get_resort(
    id: str,
    repo: ResortQueries = Depends(),
    #account_data: dict = Depends(authenticator.get_current_account_data),
    ):
    return repo.get_one(id)

@router.delete("/api/resorts/{resort_id}", response_model=bool)
def delete_resort(
    resort_id = str,
    repo: ResortQueries = Depends()
):
    return repo.delete(resort_id)
