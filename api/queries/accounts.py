from .client import Queries
from models import (
    AccountIn,
    AccountOutPublic,
    # AccountList,
    AccountOutWithHashedPassword,
)
from bson.objectid import ObjectId


class DuplicateAccountError(ValueError):
    pass


class AccountsRepo(Queries):
    DB_NAME = "db"
    COLLECTION = "accounts"

    def create(self, info: AccountIn, hashed_password: str):
        info.username = info.username.lower()
        account = info.dict()
        del account[
            "password"
        ]
        account["hashed_password"] = hashed_password
        if self.get(account["username"]) is not None:
            raise DuplicateAccountError
        self.collection.insert_one(account)
        account["id"] = str(account["_id"])
        return AccountOutWithHashedPassword(**account)

    # def get_all(self, account_id: str = None) -> AccountList:
    #     query = {}
    #     if account_id:
    #         query["_id"] = ObjectId(account_id)
    #     accounts = []
    #     for account in self.collection.find():
    #         account["id"] = str(account["_id"])
    #         accounts.append(AccountOutPublic(**account))
    #     return accounts

    def get(self, username: str):
        result = self.collection.find_one({"username": username.lower()})
        if result is None:
            return None
        result["id"] = str(result["_id"])
        return AccountOutWithHashedPassword(**result)

    def get_one(self, account_id: str) -> AccountOutPublic:
        account = self.collection.find_one({"_id": ObjectId(account_id)})
        if account:
            account["id"] = str(account["_id"])
            return AccountOutPublic(**account)

    def delete(self, id: str) -> bool:
        result = self.collection.delete_one({"_id": ObjectId(id)})
        return result.deleted_count == 1
