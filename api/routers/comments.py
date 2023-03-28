from fastapi import APIRouter, Depends
from pydantic import BaseModel
from models import CommentIn, CommentOut, CommentList
from queries.comments import CommentQueries

router = APIRouter()

@router.post("/api/comments", response_model=CommentOut)
async def create_comment(
    comment: CommentIn,
    repo: CommentQueries = Depends(),
):
    comment = repo.create(comment)
    return comment

@router.get("/api/comments", response_model=CommentList)
def get_comments(
    repo: CommentQueries = Depends()
    ):
    return {
        'comments': repo.get_all()
    }

@router.get("/api/comments/{comment_id}", response_model=CommentOut)
async def get_comment(
    comment_id: str,
    repo: CommentQueries = Depends()
    ):
    return repo.get_one(comment_id)

@router.delete("/api/comments/{comment_id}", response_model=bool)
def delete_comment(
    comment_id = str,
    repo: CommentQueries = Depends()
):
    return repo.delete(comment_id)
