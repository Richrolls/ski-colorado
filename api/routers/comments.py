from fastapi import APIRouter, Depends
from pydantic import BaseModel
from models import CommentIn, CommentOut, CommentList
from queries.comments import CommentQueries
from authenticator import authenticator

router = APIRouter()

@router.post("/api/comments", response_model=CommentOut)
async def create_comment(
    comment: CommentIn,
    repo: CommentQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data), #requires user to be logged in
):
    comment = repo.create(comment, user_id=account_data['id'])
    return comment

@router.get("/api/comments", response_model=CommentList)
def get_comments(
    repo: CommentQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
    ):
    print(account_data)
    return {
        'comments': repo.get_all(user_id=account_data['id'])
    }

@router.get("/api/comments/{comment_id}", response_model=CommentOut)
async def get_comment(
    comment_id: str,
    repo: CommentQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
    ):
    return repo.get_one(comment_id)

@router.delete("/api/comments/{comment_id}", response_model=bool)
def delete_comment(
    comment_id = str,
    repo: CommentQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return repo.delete(comment_id, user_id=account_data['id'])
