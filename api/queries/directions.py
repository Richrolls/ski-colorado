import requests

def get_directions(origin: str, destination: str, key: str): #how to pass in user address, destination address, and API key as parameters?
    url = f"https://maps.googleapis.com/maps/api/directions/json?origin={origin}&destination={destination}&key={key}"
    response = requests.get(url)
    data = response.json()
    return data
