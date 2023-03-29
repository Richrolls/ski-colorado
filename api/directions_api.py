from fastapi import APIRouter
import requests

directions_router = APIRouter()

@directions_router.get("/api/resort/{resort_id}/directions")
async def directions(origin: str, destination: str, key: str):
    url = f"https://maps.googleapis.com/maps/api/directions/json?origin={origin}&destination={destination}&key={key}"
    response = requests.get(url)
    data = response.json()
    return data



#RUN FROM DOCKERFILE.DEV
