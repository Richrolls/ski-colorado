from fastapi import APIRouter, Depends
from pydantic import BaseModel
from models import FavoriteIn, FavoriteOut, FavoriteList
from queries.favorites import FavoriteQueries
from authenticator import authenticator

router = APIRouter()

@router.post("/api/favorites", response_model=FavoriteOut)
async def create_favorite(
    favorite: FavoriteIn,
    repo: FavoriteQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    favorite = repo.create(favorite)
    return favorite

@router.get("/api/favorites", response_model=FavoriteList)
def get_favorites(
    repo: FavoriteQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
    ):
    return {
        'favorites': repo.get_all()
    }

@router.get("/api/favorites/{favorite_id}", response_model=FavoriteOut)
async def get_favorite(
    favorite_id: str,
    repo: FavoriteQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
    ):
    return repo.get_one(favorite_id)

@router.delete("/api/favorites/{favorite_id}", response_model=bool)
def delete_favorite(
    favorite_id = str,
    repo: FavoriteQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return repo.delete(favorite_id)

