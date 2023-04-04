from fastapi import APIRouter, Depends
from pydantic import BaseModel
from models import FavoriteIn, FavoriteOut, FavoriteList
from queries.favorites import FavoriteQueries
from authenticator import authenticator
from typing import List

router = APIRouter()

# @router.post("/api/resorts/{resort_id}/favorites", response_model=FavoriteOut)
# async def create_favorite(
#     resort_id: str,
#     repo: FavoriteQueries = Depends(),
#     account_data: dict = Depends(authenticator.get_current_account_data),
# ):
#     new_favorite = FavoriteIn(resort_id=resort_id, user_id=account_data['id'])
#     favorite = repo.insert_one(new_favorite)
#     return favorite

@router.post("/api/resorts/{resort_id}/favorites", response_model=List[FavoriteOut])
async def create_favorites(
    favorites: List[FavoriteIn],
    resort_id: str,
    repo: FavoriteQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    created_favorites = []
    for favorite in favorites:
        new_favorite = FavoriteIn(
            resort_id=resort_id,
            user_id=account_data['id']
        )
        created_favorite = repo.create(new_favorite)
        created_favorites.append(created_favorite)
    return FavoriteList(favorites=created_favorites)

@router.get("/api/resorts/{resort_id}/favorites", response_model=FavoriteList)
def get_favorites(
    repo: FavoriteQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
    ):
    return {
        'favorites': repo.get_all()
    }

@router.get("/api/resorts/{resort_id}/favorites/{favorite_id}", response_model=FavoriteOut)
async def get_favorite(
    favorite_id: str,
    repo: FavoriteQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
    ):
    return repo.get_one(favorite_id)

@router.delete("/api/resorts/{resort_id}/favorites/{favorite_id}", response_model=bool)
def delete_favorite(
    favorite_id = str,
    repo: FavoriteQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return repo.delete(favorite_id)
