import os
import pymongo

#this is all from Riley's demonstration on 3/24
MONGO_URL = os.environ.get('MONGO_URL', 'TEST')
client = pymongo.MongoClient(MONGO_URL)


class Queries:
    @property
    def collection(self):
        t = client['resorts']
        return t[self.COLLECTION]
