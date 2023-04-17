from fastapi import APIRouter, Depends
from pydantic import BaseModel
from typing import List
from models import ResortIn, ResortOut, ResortList
from queries.resorts import ResortQueries
from authenticator import authenticator

router = APIRouter()

# @router.post("/api/resorts", response_model=ResortOut)
# async def create_resort(
#     resort: ResortIn,
#     repo: ResortQueries = Depends(),
# ):
#     resort = repo.create(resort)
#     return resort

### BELOW THIS LINE IS A POST METHOD FOR CREATING MULTIPLE RESORT INSTANCES AT ONCE. TO REVERT TO SINGLE-INSTANCE, COMMENT OUT LINES 20-29 AND COMMENT IN LINES 10-16. ###

@router.post("/api/resorts", response_model=List[ResortOut])
async def create_resorts(
    resorts: List[ResortIn],
    repo: ResortQueries = Depends()
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
        return {
            'resorts': repo.get_all()
        }


@router.get("/api/resorts/{resort_id}", response_model=ResortOut)
async def get_resort(
    resort_id: str,
    repo: ResortQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
    ):
    return repo.get_one(resort_id)

@router.delete("/api/resorts/{resort_id}", response_model=bool)
def delete_resort(
    resort_id = str,
    repo: ResortQueries = Depends()
):
    return repo.delete(resort_id)
