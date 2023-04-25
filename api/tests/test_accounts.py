from fastapi.testclient import TestClient
from main import app
from queries.accounts import AccountsRepo
from authenticator import authenticator

client = TestClient(app)

def fake_get_current_account_data():
    return {
        'id': 'fakeuser'
    }

class FakeAccountsRepo:

    def get_one(self, account_id):
        return {
        "id": account_id,
        "first_name": "test",
        "last_name": "test",
        "username": "123",
        "email": "123@123.com",
        "address_1": "123",
        "address_2": "123",
        "city": "Aventura",
        "state": "FL",
        "zipcode": 33180,
        "ski": True,
        "snowboard": False,
        "picture_url": "https://i.imgur.com/J3ranqA.png",
        "account_id": "account_id"
        }

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


def test_get_account():
    #Arrange
    app.dependency_overrides[AccountsRepo] = FakeAccountsRepo
    app.dependency_overrides[authenticator.get_current_account_data] = fake_get_current_account_data

    #Act
    res = client.get('/api/accounts/6448218ba64084c036a7dd29')
    data = res.json()

    #Assert
    assert res.status_code == 200
    assert data['id'] == "6448218ba64084c036a7dd29"

    #Cleanup
    app.dependency_overrides = {}


def test_get_accounts():
    #Arrange
    app.dependency_overrides[AccountsRepo] = FakeAccountsRepo

    #Act
    res = client.get('/api/accounts')
    data = res.json()

    #Assert
    assert res.status_code == 200
    assert len(data['accounts']) == 1

    #Cleanup
    app.dependency_overrides = {}
