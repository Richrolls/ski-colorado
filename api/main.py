from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from routers import skicolorado

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


app.include_router(skicolorado.router, prefix="/api")
# @app.get("/api/resorts")
# def resort_list():
#     return {
#         "resort_list": {
#         "id": 1
#         }
#     }
