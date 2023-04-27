from main import app
from models import CommentIn, CommentOut
from fastapi.testclient import TestClient
from queries.comments import CommentQueries
from authenticator import authenticator


client = TestClient(app)


def fake_get_account_data():
    return {"id": "fakeuser"}


class FakeCommentQueries:
    def get_all_for_resort(self, resort_id):
        return [
            {
                "rating": 5,
                "comment": "TOTES LIT BRUH",
                "user_id": 1,
                "resort_id": "1",
                "id": "1",
            },
            {
                "rating": 2,
                "comment": "SO MANY SKWUBS LMAO",
                "user_id": 2,
                "resort_id": "1",
                "id": "2",
            },
        ]


def create(self):
    return [
        {
            "rating": 1,
            "comment": "ABSOLUTELY AWFUL",
        }
    ]


def test_get_comments():
    # Arrange
    app.dependency_overrides[CommentQueries] = FakeCommentQueries
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_account_data

    # Act
    res = client.get("/api/resorts/1/comments")
    data = res.json()

    # Assert
    assert res.status_code == 200
    assert len(data["comments"]) == 2

    # A Cleanup
    app.dependency_overrides = {}


def fake_get_current_account_data():
    return {"id": "fakeuser"}


class CommentQueriesMock:
    def create(self, params: CommentIn, resort_id, user_id) -> CommentOut:
        comment = params.dict()
        comment["resort_id"] = "abcdefg"
        comment["user_id"] = "1"
        comment["id"] = "10"
        return CommentOut(**comment)


def test_create_comments():
    app.dependency_overrides[CommentQueries] = CommentQueriesMock
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data
    comment = {
        "rating": 5,
        "comment": "stringggggg",
    }
    res = client.post("/api/resorts/1/comments", json=comment)
    assert res.status_code == 200
    app.dependency_overrides = {}
