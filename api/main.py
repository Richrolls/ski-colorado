from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from routers import resorts,comments, accounts, favorites
from authenticator import authenticator
from directions_api import directions_router
from openweather_api import openweather_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        os.environ.get("CORS_HOST", "http://localhost:3000")
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/launch-details")
def launch_details():
    return {
        "launch_details": {
            "year": 2022,
            "month": 12,
            "day": "9",
            "hour": 19,
            "min": 0,
            "tz:": "PST"
        }
    }


app.include_router(resorts.router, tags=['Resorts'])
app.include_router(comments.router, tags=['Comments'])
app.include_router(accounts.router, tags=['Accounts'])
app.include_router(favorites.router, tags=['Favorites'])
app.include_router(authenticator.router, tags=['Tokens'])
app.include_router(directions_router, tags=['Directions'])
app.include_router(openweather_router, tags=['Weather'])
