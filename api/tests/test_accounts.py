from fastapi.testclient import TestClient
from main import app
from queries.accounts import AccountsRepo

client = TestClient(app)

class FakeAccountsRepo:
    def get_all(self):
        return [{
      "id": "64480d7efea04648b818cd4c",
      "first_name": "test",
      "last_name": "test",
      "username": "123",
      "email": "123@123.com",
      "address_1": "123",
      "address_2": "123",
      "city": "Miami",
      "state": "Florida",
      "zipcode": 33180,
      "ski": True,
      "snowboard": False,
      "picture_url": "string"
    }]


def test_get_accounts():
    #Arrange
    app.dependency_overrides[AccountsRepo] = FakeAccountsRepo

    #Act
    res = client.get('/api/accounts')

    #Assert
    assert res.status_code == 200
