from typing import List, Optional
from .client import Queries
from models import CommentIn, CommentOut, CommentList
from bson.objectid import ObjectId


class CommentQueries(Queries):
    DB_NAME = "db"
    COLLECTION = "comments"

    def create(self, params: CommentIn) -> CommentOut:
        comment = params.dict()
        self.collection.insert_one(comment)
        comment['id'] = str(comment['_id'])
        return CommentOut(**comment)

    def get_all(self) -> list[CommentOut]:
        comments = []
        for comment in self.collection.find():
            comment['id'] = str(comment['_id'])
            comments.append(CommentOut(**comment))
        return comments

    def get_one(self, comment_id: str) -> Optional[CommentOut]:
        comment = self.collection.find_one({'_id': ObjectId(comment_id)})
        if comment:
            comment['id'] = str(comment['_id'])
            return CommentOut(**comment)


    def delete(self, id: str, user_id: str) -> bool:
        result = self.collection.delete_one({'_id': ObjectId(id), 'user_id': user_id})
        return result.deleted_count == 1
