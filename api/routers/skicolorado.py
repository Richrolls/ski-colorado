from fastapi import APIRouter, Depends
from pydantic import BaseModel
from models import ResortIn, ResortOut, ResortList
from queries.resorts import ResortQueries

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
    repo: ResortQueries = Depends()
    ):
    return {
        'resorts': repo.get_all()
    }
