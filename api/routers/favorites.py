from fastapi import APIRouter, Depends, status, HTTPException
from models import Favorite, FavoriteList
from queries.favorites import FavoriteQueries, DuplicateFavoriteError
from authenticator import authenticator

router = APIRouter()


@router.post("/api/resorts/{resort_id}/favorites", response_model=Favorite)
async def create_favorite(
    resort_id: str,
    repo: FavoriteQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    try:
        favorite = repo.insert_one(
            resort_id=resort_id, user_id=account_data["id"]
        )
    except DuplicateFavoriteError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Already favorited",
        )
    return favorite


@router.get("/api/resorts/{resort_id}/favorites", response_model=FavoriteList)
def get_resort_favorites(
    resort_id: str,
    repo: FavoriteQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return {"favorites": repo.get_all_for_resort(resort_id=resort_id)}


@router.get("/api/accounts/{user_id}/favorites", response_model=FavoriteList)
def get_user_favorites(
    user_id: str,
    repo: FavoriteQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return {"favorites": repo.get_all_for_user(user_id=user_id)}


@router.get("/api/favorites", response_model=FavoriteList)
def get_all_favorites(
    repo: FavoriteQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return {"favorites": repo.get_all()}


@router.get(
    "/api/resorts/{resort_id}/favorites/{favorite_id}", response_model=Favorite
)
async def get_favorite(
    favorite_id: str,
    repo: FavoriteQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return repo.get_one(favorite_id)


@router.delete(
    "/api/resorts/{resort_id}/favorites/{favorite_id}", response_model=bool
)
def delete_favorite(
    favorite_id=str,
    repo: FavoriteQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return repo.delete(favorite_id)
