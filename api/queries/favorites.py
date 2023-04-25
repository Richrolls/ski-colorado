from typing import List, Optional
from .client import Queries
from models import FavoriteIn, FavoriteOut
from bson.objectid import ObjectId


class FavoriteQueries(Queries):
    DB_NAME = "db"
    COLLECTION = "favorites"

    def insert_one(self, params: FavoriteIn) -> FavoriteOut:
        favorite = params.dict()
        self.collection.insert_one(favorite)
        favorite['id'] = str(favorite['_id'])
        return FavoriteOut(**favorite)

    def get_all_for_resort(self, resort_id: str) -> list[FavoriteOut]:
        favorites = []
        for favorite in self.collection.find({"resort_id": resort_id}):
            favorite['id'] = str(favorite['_id'])
            favorites.append(FavoriteOut(**favorite))
        return favorites

    def get_all_for_user(self, user_id: str) -> list[FavoriteOut]:
        favorites = []
        for favorite in self.collection.find({"user_id": user_id}):
            favorite['id'] = str(favorite['_id'])
            favorites.append(FavoriteOut(**favorite))
        return favorites

    def get_all(self) -> list[FavoriteOut]:
        favorites = []
        for favorite in self.collection.find():
            favorite['id'] = str(favorite['_id'])
            favorites.append(FavoriteOut(**favorite))
        return favorites

    def get_one(self, favorite_id: str) -> Optional[FavoriteOut]:
        favorite = self.collection.find_one({'_id': ObjectId(favorite_id)})
        if favorite:
            favorite['id'] = str(favorite['_id'])
            return FavoriteOut(**favorite)


    def delete(self, id: str) -> bool:
        result = self.collection.delete_one({'_id': ObjectId(id)})
        return result.deleted_count == 1
