from fastapi import APIRouter
import requests
import os

OPENWEATHER_API_KEY = os.environ["OPENWEATHER_API_KEY"]

openweather_router = APIRouter()

@openweather_router.get("/api/resort/{resort_id}/weather")
async def get_weather(coordinates: str):
    url = f"http://api.weatherapi.com/v1/current+forecast.json?key={OPENWEATHER_API_KEY}&q={coordinates}"
    response = requests.get(url)
    data = response.json()
    return data
