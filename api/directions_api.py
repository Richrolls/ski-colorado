from fastapi import APIRouter
import requests
import os

GOOGLE_MAPS_API_KEY = os.environ["GOOGLE_MAPS_API_KEY"]

directions_router = APIRouter()


@directions_router.get("/api/directions")
async def directions(origin: str, destination: str):
    url = f"https://maps.googleapis.com/maps/api/directions/" \
        f"json?origin={origin}&destination={destination}&" \
        f"key={GOOGLE_MAPS_API_KEY}"
    response = requests.get(url)
    data = response.json()
    return data
