from fastapi import APIRouter
from queries.directions import get_directions

router = APIRouter

@router.get("/api/directions")
async def directions(origin: str, destination: str, key: str):
    data = get_directions(origin, destination, key)
    return data
