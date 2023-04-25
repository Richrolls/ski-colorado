from typing import List, Optional
from .client import Queries
from models import Favorite
from bson.objectid import ObjectId


class FavoriteQueries(Queries):
    DB_NAME = "db"
    COLLECTION = "favorites"

    def insert_one(self, resort_id, user_id) -> Favorite:
        favorite = {'resort_id': resort_id,'user_id': user_id}
        self.collection.insert_one(favorite)
        favorite['id'] = str(favorite['_id'])
        return Favorite(**favorite)

    def get_all_for_resort(self, resort_id: str) -> list[Favorite]:
        favorites = []
        for favorite in self.collection.find({"resort_id": resort_id}):
            favorite['id'] = str(favorite['_id'])
            favorites.append(Favorite(**favorite))
        return favorites

    def get_all_for_user(self, user_id: str) -> list[Favorite]:
        favorites = []
        for favorite in self.collection.find({"user_id": user_id}):
            favorite['id'] = str(favorite['_id'])
            favorites.append(Favorite(**favorite))
        return favorites

    def get_all(self) -> list[Favorite]:
        favorites = []
        for favorite in self.collection.find():
            favorite['id'] = str(favorite['_id'])
            favorites.append(Favorite(**favorite))
        return favorites

    def get_one(self, favorite_id: str) -> Optional[Favorite]:
        favorite = self.collection.find_one({'_id': ObjectId(favorite_id)})
        if favorite:
            favorite['id'] = str(favorite['_id'])
            return Favorite(**favorite)


    def delete(self, id: str) -> bool:
        result = self.collection.delete_one({'_id': ObjectId(id)})
        return result.deleted_count == 1
