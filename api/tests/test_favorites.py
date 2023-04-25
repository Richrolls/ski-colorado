from main import app
from fastapi.testclient import TestClient
from queries.favorites import FavoriteQueries
from models import FavoriteOut
from authenticator import authenticator

client = TestClient(app)

def fake_get_current_account_data():
    return {
        'id': 'fakeuser'
    }

class FavoriteQueriesMock:
    def get_all(self) -> FavoriteOut:
        return [{
            "user_id": "644700330409a2b637f70f67",
            "resort_id": "6446fabd9bb96242400c1af8",
            "id": "644702700409a2b637f70f69"
        }]


def test_get_all_favorites():
    app.dependency_overrides[FavoriteQueries] = FavoriteQueriesMock
    app.dependency_overrides[authenticator.get_current_account_data] = fake_get_current_account_data
    res = client.get('/api/resorts/testresort/favorites')
    assert len(res.json()['favorites']) == 1
    app.dependency_overrides = {}
