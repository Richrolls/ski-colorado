from fastapi.testclient import TestClient
from main import app
from queries.resorts import ResortQueries ##Pathing issues?
from authenticator import authenticator


client = TestClient(app)

def fake_get_current_account_data():
    return {
        'id': 'fakeuser'
    }

class FakeResortQueries:
    def get_one(self, resort_id):
        return {
            "address": "100 Dercum Square",
            "city": "Keystone",
            "state": "CO",
            "zipcode": 80435,
            "coordinates": "teststring",
            "name": "Keystone Resort",
            "photo_url": "https://dam-assets.vailresorts.com/is/image/vailresorts/20180123_KY_balluff_001:Product-Cards-Landing?resMode=sharp2&w=1002&h=668&wid=382&fit=constrain,1&dpr=on,2.625",
            "average_rating": 0,
            "elevation": 12408,
            "price": 4,
            "vertical_drop": 3128,
            "num_trails": 130,
            "pass_type": "Epic",
            "resort_website": "https://www.keystoneresort.com/",
            "id": resort_id,
            }
    def get_all(self):
        return [
            {
            "address": "100 Dercum Square",
            "city": "Keystone",
            "state": "CO",
            "zipcode": 80435,
            "coordinates": "teststring",
            "name": "Keystone Resort",
            "photo_url": "https://dam-assets.vailresorts.com/is/image/vailresorts/20180123_KY_balluff_001:Product-Cards-Landing?resMode=sharp2&w=1002&h=668&wid=382&fit=constrain,1&dpr=on,2.625",
            "average_rating": 0,
            "elevation": 12408,
            "price": 4,
            "vertical_drop": 3128,
            "num_trails": 130,
            "pass_type": "Epic",
            "resort_website": "https://www.keystoneresort.com/",
            "id": "1",

            },
        ]

def test_get_resort():
    #Arrange
    app.dependency_overrides[ResortQueries] = FakeResortQueries
    app.dependency_overrides[authenticator.get_current_account_data] = fake_get_current_account_data
    # Act
    response = client.get('/api/resorts/1')
    data = response.json()
    #Assert
    assert response.status_code == 200
    assert data['id'] == '1'
    #Cleanup
    app.dependency_overrides = {}



def test_get_resorts():
    #Arrange
    app.dependency_overrides[ResortQueries] = FakeResortQueries
    app.dependency_overrides[authenticator.get_current_account_data] = fake_get_current_account_data
    #Act
    response = client.get('/api/resorts')
    data = response.json()
    #Assert
    assert response.status_code == 200
    assert len(data['resorts']) == 1
    #Cleanup
    app.dependency_overrides = {}
