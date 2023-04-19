from fastapi import APIRouter
import requests
from models import AccountOut
import os

GOOGLE_MAPS_API_KEY = os.environ["GOOGLE_MAPS_API_KEY"]

directions_router = APIRouter()

def convert_account_address_to_string(AccountOut: AccountOut):
    x = AccountOut.address
    print(x)

@directions_router.get("/api/directions")
async def directions(origin: str, destination: str):
    url = f"https://maps.googleapis.com/maps/api/directions/json?origin={origin}&destination={destination}&key={GOOGLE_MAPS_API_KEY}"
    response = requests.get(url)
    data = response.json()
    return data



#RUN FROM DOCKERFILE.DEV??
