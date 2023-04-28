from fastapi import APIRouter, Depends
from typing import List
from models import ResortIn, ResortOut, ResortList
from queries.resorts import ResortQueries
from authenticator import authenticator

router = APIRouter()

@router.post("/api/resorts", response_model=list[ResortOut])
async def create_resorts(
    resorts: List[ResortIn], repo: ResortQueries = Depends()
):
    created_resorts = []
    for resort in resorts:
        created_resort = repo.create(resort)
        created_resorts.append(created_resort)
    return created_resorts


@router.get("/api/resorts", response_model=ResortList)
def get_resorts(
    repo: ResortQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return {"resorts": repo.get_all()}


@router.get("/api/resorts/{resort_id}", response_model=ResortOut)
async def get_resort(
    resort_id: str,
    repo: ResortQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return repo.get_one(resort_id)


@router.delete("/api/resorts/{resort_id}", response_model=bool)
def delete_resort(resort_id=str, repo: ResortQueries = Depends()):
    return repo.delete(resort_id)
