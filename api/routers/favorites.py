from fastapi import APIRouter, Depends
from pydantic import BaseModel
from models import Favorite, FavoriteList
from queries.favorites import FavoriteQueries
from authenticator import authenticator

router = APIRouter()

@router.post("/api/resorts/{resort_id}/favorites", response_model=Favorite)
async def create_favorite(
    favorite: Favorite,
    resort_id: str,
    user_id: str,
    repo: FavoriteQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    print(account_data)
    new_favorite = Favorite(resort_id=resort_id, user_id=account_data['id'])
    favorite = repo.create(new_favorite)
    return favorite
    # favorite = repo.create(
    #     {
    #     "resort_id": str,
    #     "account_id": account_data
    #     }
    # )
    # return favorite

@router.get("/api/resorts/{resort_id}/favorites", response_model=FavoriteList)
def get_favorites(
    repo: FavoriteQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
    ):
    return {
        'favorites': repo.get_all()
    }

@router.get("/api/resorts/{resort_id}/favorites/{favorite_id}", response_model=Favorite)
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
