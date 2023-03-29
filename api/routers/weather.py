from fastapi import APIRouter
from queries.weather import get_weather

router = APIRouter()

@router.get("/weather")
async def weather(resort_address: str, weather_key: str):
    data = get_weather(resort_address, weather_key)
    return data
