from main import app
from fastapi.testclient import TestClient
from queries.comments import CommentQueries
from models import CommentIn, CommentOut
from authenticator import authenticator

client = TestClient(app)

def fake_get_current_account_data():
    return {
        'id': 'fakeuser'
    }

class CommentQueriesMock:
    def create(self, params: CommentIn) -> CommentOut:
        comment = params.dict()
        comment['id'] = '10'
        return CommentOut(**comment)

def test_create_comments():
    app.dependency_overrides[CommentQueries] = CommentQueriesMock
    app.dependency_overrides[authenticator.get_current_account_data] = fake_get_current_account_data
    comment = {
    "rating": 5,
    "comment": "stringggggg",
    "user_id": "1",
    "resort_id": "1",
    }
    res = client.post('/api/resorts/1/comments', json=comment)
    assert res.status_code == 200
    app.dependency_overrides = {}
