from fastapi import APIRouter
import requests
import os

WEATHER_API_KEY = os.environ["WEATHER_API_KEY"]

openweather_router = APIRouter()


@openweather_router.get("/api/resort/{resort_id}/weather")
async def get_weather(coordinates: str):
    url = f"https://api.weatherapi.com/v1/current+forecast.json?" \
          f"key={WEATHER_API_KEY}&q={coordinates}"
    response = requests.get(url)
    data = response.json()
    return data
