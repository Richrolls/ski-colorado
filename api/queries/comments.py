from typing import List, Optional
from .client import Queries
from models import Comment, CommentList
from bson.objectid import ObjectId


class CommentQueries(Queries):
    DB_NAME = "db"
    COLLECTION = "comments"

    def create(self, resort_id, user_id, params: Comment) -> Comment:
        comment = Comment(resort_id=resort_id, user_id=user_id)
        self.collection.insert_one(comment.dict())
        comment['id'] = str(comment['_id'])
        return Comment(**comment)

    def get_all(self, resort_id: str) -> list[Comment]:
        comments = []
        for comment in self.collection.find():
            comment['id'] = str(comment['_id'])
            comments.append(Comment(**comment))
        return comments

    def get_one(self, comment_id: str) -> Optional[Comment]:
        comment = self.collection.find_one({'_id': ObjectId(comment_id)})
        if comment:
            comment['id'] = str(comment['_id'])
            return Comment(**comment)


    def delete(self, id: str, user_id: str) -> bool:
        result = self.collection.delete_one({'_id': ObjectId(id), 'user_id': user_id})
        return result.deleted_count == 1
