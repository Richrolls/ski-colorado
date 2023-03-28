from fastapi import APIRouter, Depends
from pydantic import BaseModel
from models import FavoriteIn, FavoriteOut, FavoriteList
from queries.favorites import FavoriteQueries

router = APIRouter()

@router.post("/api/favorites", response_model=FavoriteOut)
async def create_favorite(
    favorite: FavoriteIn,
    repo: FavoriteQueries = Depends(),
):
    favorite = repo.create(favorite)
    return favorite

@router.get("/api/favorites", response_model=FavoriteList)
def get_favorites(
    repo: FavoriteQueries = Depends()
    ):
    return {
        'favorites': repo.get_all()
    }

@router.get("/api/favorites/{favorite_id}", response_model=FavoriteOut)
async def get_favorite(
    favorite_id: str,
    repo: FavoriteQueries = Depends()
    ):
    return repo.get_one(favorite_id)

@router.delete("/api/favorites/{favorite_id}", response_model=bool)
def delete_favorite(
    favorite_id = str,
    repo: FavoriteQueries = Depends()
):
    return repo.delete(favorite_id)
