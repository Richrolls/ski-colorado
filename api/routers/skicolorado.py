from fastapi import APIRouter, Depends
from pydantic import BaseModel
from models import ResortIn, ResortOut, ResortList, AccountIn, AccountOut, CommentIn, CommentOut, FavoriteIn, FavoriteOut
from queries.resorts import ResortQueries

router = APIRouter()

@router.post("/resorts", response_model=ResortOut)


@router.get("/resorts", response_model=ResortOut)
def get_resorts(repo: ResortQueries = Depends()):
    return ResortList(resorts=repo.get_all())

