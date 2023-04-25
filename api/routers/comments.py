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
    repo: CommentQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    comment = repo.create(comment)
    return comment


# @router.post("/api/resorts", response_model=ResortOut)
# async def create_resort(
#     resort: ResortIn,
#     repo: ResortQueries = Depends(),
# ):
#     resort = repo.create(resort)
#     return resort

# @router.post("/api/resorts/{resort_id}/comments", response_model=CommentOut)
# async def create_comment(
#     rating: int,
#     comment: str,
#     resort_id: str,
#     repo: CommentQueries = Depends(),
#     account_data: dict = Depends(authenticator.get_current_account_data),
# ):
#     new_comment = CommentIn(rating=rating, comment=comment, resort_id=resort_id, user_id=account_data['id'])
#     comment = repo.create(new_comment)
#     return comment

#### BELOW THIS LINE IS FUNCTIONALITY FOR POSTING/SEEDING MULTIPLE COMMENTS AT ONCE. TO USE, UNCOMMENT LINES 24-41 AND COMMENT OUT LINES 11-20. NOT YET INTEGRATING DUE TO FRONTEND CONCERNS ###

# @router.post("/api/resorts/{resort_id}/comments", response_model=CommentList)
# async def create_comments(
#     comments: List[CommentIn],
#     resort_id: int,
#     repo: CommentQueries = Depends(),
#     account_data: dict = Depends(authenticator.get_current_account_data)
# ):
#     created_comments = []
#     for comment in comments:
#         new_comment = CommentIn(
#             rating=comment.rating,
#             comment=comment.comment,
#             resort_id=resort_id,
#             user_id=account_data['id']
#         )
#         created_comment = repo.create(new_comment)
#         created_comments.append(created_comment)
#     return CommentList(comments=created_comments)

@router.get("/api/resorts/{resort_id}/comments", response_model=CommentList)
async def get_comments(
    repo: CommentQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
    resort_id: Optional[str] = '_'
    ):
    if resort_id:
        comments = repo.get_all()
    else:
        comments = repo.get_all()
    return {'comments': comments}


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
