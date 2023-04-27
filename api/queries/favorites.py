from typing import List, Optional
from .client import Queries
from models import Favorite, FavoriteList
from bson.objectid import ObjectId


class DuplicateFavoriteError(ValueError):
    pass


class FavoriteQueries(Queries):
    DB_NAME = "db"
    COLLECTION = "favorites"

    def insert_one(self, resort_id: str, user_id: str) -> Favorite:
        favorite = {"resort_id": resort_id, "user_id": user_id}
        if self.get(favorite["resort_id"], favorite["user_id"]) is not None:
            raise DuplicateFavoriteError
        self.collection.insert_one(favorite)
        favorite["id"] = str(favorite["_id"])
        return Favorite(**favorite)

    def get_all_for_resort(self, resort_id: str) -> FavoriteList:
        favorites = []
        for favorite in self.collection.find({"resort_id": resort_id}):
            favorite["id"] = str(favorite["_id"])
            favorites.append(Favorite(**favorite))
        return favorites

    def get_all_for_user(self, user_id: str) -> FavoriteList:
        favorites = []
        for favorite in self.collection.find({"user_id": user_id}):
            favorite["id"] = str(favorite["_id"])
            favorites.append(Favorite(**favorite))
        return favorites

    def get_all(self) -> FavoriteList:
        favorites = []
        for favorite in self.collection.find():
            favorite["id"] = str(favorite["_id"])
            favorites.append(Favorite(**favorite))
        return favorites

    def get(self, resort_id: str, user_id: str) -> Optional[Favorite]:
        favorite = self.collection.find_one(
            {"resort_id": resort_id, "user_id": user_id}
        )
        if favorite is None:
            return None
        favorite["id"] = str(favorite["_id"])
        return Favorite(**favorite)

    def get_one(self, favorite_id: str) -> Optional[Favorite]:
        favorite = self.collection.find_one({"_id": ObjectId(favorite_id)})
        if favorite:
            favorite["id"] = str(favorite["_id"])
            return Favorite(**favorite)

    def delete(self, id: str) -> bool:
        result = self.collection.delete_one({"_id": ObjectId(id)})
        return result.deleted_count == 1
