from typing import List, Optional
from .client import Queries
from models import FavoriteIn, FavoriteOut, FavoriteList
from bson.objectid import ObjectId


class FavoriteQueries(Queries):
    DB_NAME = "db"
    COLLECTION = "favorites"

    def create(self, params: FavoriteIn) -> FavoriteOut:
        favorite = params.dict()
        self.collection.insert_one(favorite)
        favorite['id'] = str(favorite['_id'])
        return FavoriteOut(**favorite)

    def get_all(self, favorite_id: str = None) -> FavoriteList:
        query = {}
        if favorite_id:
            query['_id'] = ObjectId(favorite_id)
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
