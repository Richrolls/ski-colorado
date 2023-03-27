from bson.objectid import ObjectId
from typing import List
from .client import Queries
from models import ResortIn, ResortOut

class ResortQueries(Queries):
    COLLECTION = "resorts"

    # def create(self, params: ThingParams) -> Thing:
    #     thing = params.dict()
    #     self.collection.insert_one(thing) #Queries superclass used here
    #     thing['id'] = str(thing['_id'])
    #     return Thing(**thing)

    def get_all(self) -> list[ResortOut]:
        resorts = []
        for resort in self.collection.find():
            resort['id'] = str(resort['_id'])
            resorts.append(ResortOut(**resort))
        return resorts

    # def delete(self, id: str) -> bool:
    #     result = self.collection.delete_one({'_id': ObjectId(id)})
    #     return result.deleted_count == 1
