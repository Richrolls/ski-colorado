from typing import List, Optional
from .client import Queries
from models import AccountIn, AccountOut, AccountList
from bson.objectid import ObjectId


class AccountQueries(Queries):
    DB_NAME = "db"
    COLLECTION = "accounts"

    def create(self, params: AccountIn) -> AccountOut:
        account = params.dict()
        self.collection.insert_one(account)
        account['id'] = str(account['_id'])
        return AccountOut(**account)

    def get_all(self, account_id: str = None) -> list[AccountOut]:
        query = {}
        if account_id:
            query['_id'] = ObjectId(account_id)
        accounts = []
        for account in self.collection.find():
            account['id'] = str(account['_id'])
            accounts.append(AccountOut(**account))
        return accounts

    def get_one(self, account_id: str) -> Optional[AccountOut]:
        account = self.collection.find_one({'_id': ObjectId(account_id)})
        if account:
            account['id'] = str(account['_id'])
            return AccountOut(**account)


    def delete(self, id: str) -> bool:
        result = self.collection.delete_one({'_id': ObjectId(id)})
        return result.deleted_count == 1
