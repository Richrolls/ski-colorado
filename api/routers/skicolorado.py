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

@router.get("/api/resorts/{resort_id}", response_model=ResortOut)
def get_resort(
    resort_id = str,
    repo: ResortQueries = Depends()
    ):
    return {
        'resorts': repo.get_all(resort_id)
    }

@router.delete("/api/resorts/{resort_id}", response_model=bool)
def delete_resort(
    resort_id = str,
    repo: ResortQueries = Depends()
):
    return repo.delete(resort_id)
