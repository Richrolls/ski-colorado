from fastapi import APIRouter, Depends
from pydantic import BaseModel
from typing import List, Optional
from models import CommentIn, CommentOut, CommentList
from queries.comments import CommentQueries
from authenticator import authenticator

router = APIRouter()

@router.post("/api/resorts/{resort_id}/comments", response_model=CommentOut)
async def create_comment(
    comment: CommentIn,
    resort_id: str,
    repo: CommentQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    comment = repo.create(comment, resort_id=resort_id, user_id=account_data['id'])
    return comment


@router.get("/api/resorts/{resort_id}/comments", response_model=CommentList)
async def get_comments(
    resort_id: str,
    repo: CommentQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
    ):
    return {'comments': repo.get_all(resort_id=resort_id)}


@router.get("/api/resorts/{resort_id}/comments/{comment_id}", response_model=CommentOut)
async def get_comment(
    resort_id: str,
    comment_id: str,
    repo: CommentQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
    ):
    return repo.get_one(resort_id, comment_id, user_id=account_data['id'])


@router.delete("/api/resorts/{resort_id}/comments/{comment_id}", response_model=bool)
def delete_comment(
    comment_id = str,
    repo: CommentQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return repo.delete(comment_id, user_id=account_data['id'])
