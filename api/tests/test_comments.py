from main import app
from fastapi.testclient import TestClient
from queries.comments import CommentQueries
from authenticator import authenticator


client = TestClient(app)


def fake_get_account_data():
    return {
        "id": "fakeuser"
    }


class FakeCommentQueries:
    def get_all(self):
        return [
        {
            "rating": 5,
            "comment": "TOTES LIT BRUH",
            "user_id": 1,
            "resort_id": "1",
            "id": "1"
        },
        {
            "rating": 2,
            "comment": "SO MANY SKWUBS LMAO",
            "user_id": 2,
            "resort_id": "1",
            "id": "2"
        }
    ]


def test_get_comments():
    # Arrange
    app.dependency_overrides[CommentQueries] = FakeCommentQueries
    app.dependency_overrides[authenticator.get_current_account_data] = fake_get_account_data

    # Act
    res = client.get("/api/resorts/1/comments")
    data = res.json()

    # Assert
    assert res.status_code == 200
    assert len(data["comments"]) == 2

    # A Cleanup
    app.dependency_overrides = {}
