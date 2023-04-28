from typing import Optional
from .client import Queries
from models import CommentIn, CommentOut, CommentList
from bson.objectid import ObjectId


class CommentQueries(Queries):
    DB_NAME = "db"
    COLLECTION = "comments"

    def create(self, params: CommentIn, resort_id, user_id) -> CommentOut:
        comment = params.dict()
        comment["resort_id"] = resort_id
        comment["user_id"] = user_id
        self.collection.insert_one(comment)
        comment["id"] = str(comment["_id"])
        return CommentOut(**comment)

    def get_all_for_resort(self, resort_id: str) -> CommentList:
        comments = []
        for comment in self.collection.find({"resort_id": resort_id}):
            comment["id"] = str(comment["_id"])
            comments.append(CommentOut(**comment))
        return comments

    def get_all_for_user(self, user_id: str) -> CommentList:
        comments = []
        for comment in self.collection.find({"user_id": user_id}):
            comment["id"] = str(comment["_id"])
            comments.append(CommentOut(**comment))
        return comments

    def get_one(self, comment_id: str) -> Optional[CommentOut]:
        comment = self.collection.find_one({"_id": ObjectId(comment_id)})
        if comment:
            comment["id"] = str(comment["_id"])
            return CommentOut(**comment)

    def delete(self, id: str, user_id: str) -> bool:
        result = self.collection.delete_one(
            {"_id": ObjectId(id), "user_id": user_id}
        )
        return result.deleted_count == 1
