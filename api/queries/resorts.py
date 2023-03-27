from typing import List
from .client import Queries
from models import ResortIn, ResortOut, ResortList
from bson.objectid import ObjectId

class ResortQueries(Queries):
    DB_NAME = "db"
    COLLECTION = "resorts"

    def create(self, params: ResortIn) -> ResortOut:
        resort = params.dict()
        self.collection.insert_one(resort) #Queries superclass used here
        resort['id'] = str(resort['_id'])
        return ResortOut(**resort)

    def get_all(self) -> list[ResortOut]:
        resorts = []
        for resort in self.collection.find():
            resort['id'] = str(resort['_id'])
            resorts.append(ResortOut(**resort))
        return resorts

    def delete(self, id: str) -> bool:
        result = self.collection.delete_one({'_id': ObjectId(id)})
        return result.deleted_count == 1



    # def delete(self, id: str) -> bool:
    #     result = self.collection.delete_one({'_id': ObjectId(id)})
    #     return result.deleted_count == 1
