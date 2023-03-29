from fastapi import APIRouter
import requests

openweather_router = APIRouter()

@openweather_router.get("/api/resort/{resort_id}/weather")
async def get_weather(resort_address: str, weather_key: str):
    url = f"http://api.weatherapi.com/v1/current+forecast.json?key={weather_key}&q={resort_address}"
    response = requests.get(url)
    data = response.json()
    return data
