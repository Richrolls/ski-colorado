from typing import List, Optional
from .client import Queries
from models import AccountIn, AccountOut, AccountList, AccountOutWithHashedPassword
from bson.objectid import ObjectId

class DuplicateAccountError(ValueError):
    pass

class AccountsRepo(Queries):
    DB_NAME = "db"
    COLLECTION = "accounts"

    def create(self, info: AccountIn, hashed_password: str):
        info.username = info.username.lower()
        account = info.dict()
        del account['password'] #deletes password attribute on account for security AFTER it has been hashed already
        account['hashed_password'] = hashed_password
        # TODO: make sure username is unique
        if self.get(account['username']) is not None:
            raise DuplicateAccountError
        self.collection.insert_one(account)
        account['id'] = str(account['_id'])
        return AccountOutWithHashedPassword(**account)


    # def create(self, params: AccountIn) -> AccountOut:
    #     account = params.dict()
    #     self.collection.insert_one(account)
    #     account['id'] = str(account['_id'])
    #     return AccountOut(**account)

    def get_all(self, account_id: str = None) -> list[AccountOut]:
        query = {}
        if account_id:
            query['_id'] = ObjectId(account_id)
        accounts = []
        for account in self.collection.find():
            account['id'] = str(account['_id'])
            accounts.append(AccountOut(**account))
        return accounts

    def get(self, username: str):
        result = self.collection.find_one({"username": username.lower()})
        if result is None: #what happens if nothing is found?
            return None
        result['id'] = str(result['_id'])
        return AccountOutWithHashedPassword(**result)


    def get_one(self, account_id: str) -> Optional[AccountOut]:
        account = self.collection.find_one({'_id': ObjectId(account_id)})
        if account:
            account['id'] = str(account['_id'])
            return AccountOut(**account)


    def delete(self, id: str) -> bool:
        result = self.collection.delete_one({'_id': ObjectId(id)})
        return result.deleted_count == 1
