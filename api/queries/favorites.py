from typing import List, Optional
from .client import Queries
from models import Favorite
from bson.objectid import ObjectId


class FavoriteQueries(Queries):
    DB_NAME = "db"
    COLLECTION = "favorites"

    def create(self, params: Favorite) -> Favorite:
        favorite = params.dict()
        self.collection.insert_one(favorite)
        favorite['id'] = str(favorite['_id'])
        return Favorite(**favorite)

    def get_all(self) -> list[Favorite]:
        favorites = []
        for favorite in self.collection.find():
            favorite['id'] = str(favorite['_id'])
            favorites.append(Favorite(**favorite))
        print(favorites)
        return favorites

    def get_one(self, favorite_id: str) -> Optional[Favorite]:
        favorite = self.collection.find_one({'_id': ObjectId(favorite_id)})
        if favorite:
            favorite['id'] = str(favorite['_id'])
            return Favorite(**favorite)


    def delete(self, id: str) -> bool:
        result = self.collection.delete_one({'_id': ObjectId(id)})
        return result.deleted_count == 1
