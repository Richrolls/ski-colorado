from typing import List, Optional
from .client import Queries
from models import CommentIn, CommentOut, CommentList
from bson.objectid import ObjectId


class CommentQueries(Queries):
    DB_NAME = "db"
    COLLECTION = "comments"

    def create(self, params: CommentIn, user_id: str) -> CommentOut:

        comment = params.dict()
        comment['user_id'] = user_id
        self.collection.insert_one(comment)
        comment['id'] = str(comment['_id'])
        return CommentOut(**comment)

    def get_all(self, comment_id: str = None, user_id: str) -> list[CommentOut]: #missed something in lecture here
        query = {}
        if comment_id:
            query['_id'] = ObjectId(comment_id)
        comments = []
        for comment in self.collection.find('user_id': user_id): #problem is here
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
