APIs



RESORTS
 - Methods: GET, POST, DELETE
 - Paths: /api/resorts, /api/resorts/{resort_id}

 - Input:
	[
	{
		"address": "string",
		"city": "string",
		"state": "string",
		"zipcode": 0,
		"coordinates": "string",
		"name": "string",
		"photo_url": "string",
		"average_rating": 0,
		"elevation": 0,
		"price": 0,
		"vertical_drop": 0,
		"num_trails": 0,
		"pass_type": "string",
		"resort_website": "string"
	}
	]

- Output:
	[
	{
		"address": "string",
		"city": "string",
		"state": "string",
		"zipcode": 0,
		"coordinates": "string",
		"name": "string",
		"photo_url": "string",
		"average_rating": 0,
		"elevation": 0,
		"price": 0,
		"vertical_drop": 0,
		"num_trails": 0,
		"pass_type": "string",
		"resort_website": "string",
		"id": "string"
	}
	]

	Creating a new resort saves the street address, city, state, zipcode, coordinates, name, photo_url, average_rating, elevation, price, vertical_drop, num_trails, pass_type, and resort_website attributes. MongoDB also adds an 'id' attribute upon instantiation. This adds a new Resort to the database which can be viewed, favorited, commented on, and rated by a user.

_____________________________________________________________________________________________________________________________________________________________

COMMENT

- Methods: GET, POST, DELETE
- Paths: /api/resorts/{resort_id}/comments
		/api/accounts/{user_id}/comments
		/api/resorts/{resort_id}/comments/{comment_id}
		/api/accounts/{user_id}/comments/{comment_id}

- Input:
	{
	"rating": 0,
	"comment": "string"
	}

- Output:
{
  "rating": 0,
  "comment": "string",
  "id": "string",
  "user_id": "string",
  "resort_id": "string"
}

Creating a new comment accepts inputs from the user of 'rating' and 'comment'. 'user_id' and 'resort_id' are automatically added from the logged-in user's Token 'id' and from the Resort's 'id' attribute, respectively. MongoDB automatically adds the 'id' attribute for each comment.

_____________________________________________________________________________________________________________________________________________________________

ACCOUNT/TOKEN

- Methods: GET, DELETE
- Paths: /api/accounts, /api/accounts/{account_id}, /token

- Input:
{
  "first_name": "string",
  "last_name": "string",
  "username": "string",
  "password": "string",
  "email": "string",
  "address_1": "string",
  "address_2": "string",
  "city": "string",
  "state": "string",
  "zipcode": 0,
  "ski": false,
  "snowboard": false,
  "picture_url": "string"
}

- Output:
{
  "access_token": "string",
  "token_type": "Bearer",
  "account": {
    "id": "string",
    "first_name": "string",
    "last_name": "string",
    "username": "string",
    "email": "string",
    "address_1": "string",
    "address_2": "string",
    "city": "string",
    "state": "string",
    "zipcode": 0,
    "ski": true,
    "snowboard": true,
    "picture_url": "string"
  }
}

The Account model takes in a variety of user information, and also utilizes a custom library 'jwtdown' to assign a JWT token to a user upon account creation and login. For a logged-in user, their Profile utilizes and displays elements from the AccountOut model class. However, the sensitive portions of this model (first_name, last_name, email, address_1, address_2) are excluded from the AccountOutPublic model, eliminating the ability of a logged-in user to view the sensitive Account attributes of another user.

_____________________________________________________________________________________________________________________________________________________________

FAVORITES

- Methods: GET, POST, DELETE
- Paths: /api/resorts/{resort_id}/favorites, /api/resorts/{resort_id}/favorites/{favorite_id}

- Inputs:
{
  "id": "string",
  "user_id": "string",
  "resort_id": "string"
}

- Outputs:
{
  "favorites": [
    {
      "id": "string",
      "user_id": "string",
      "resort_id": "string"
    }
  ]
}

The Favorites API creates and deletes instances of 'Favorite' when a user selects or deselects an individual Resort as their 'favorite'. It automatically takes in the 'id' attribute of the logged-in user as well as the 'id' attribute of the Resort they are favoriting. The Favorite model class is designed so that Favorites either exist or they do not, possessing only their own 'id' attribute as well as the relevant 'user_id' and 'resort_id' attributes.

_____________________________________________________________________________________________________________________________________________________________

WEATHER

- Methods: GET
- Paths: http://api.weatherapi.com/v1/current+forecast.json?key={WEATHER_API_KEY}&q={coordinates}


The Weather API sends only a string value to the 3rd-party API. {WEATHER_API_KEY} is passed from a secret .env file where the developer's API key is stored, and 'coordinates' are passed in from the 'coordinates' attribute of the individual Resort page a user has navigated to. The returned JSON information is quite extensive, and here we have filtered it to include selected relevant weather information.
_____________________________________________________________________________________________________________________________________________________________

DIRECTIONS

- Methods: GET
- Paths: "https://maps.googleapis.com/maps/api/directions/json?origin={origin}&destination={destination}&key={GOOGLE_MAPS_API_KEY}

The Directions API takes in a  a formatted string based on the logged-in user's address information as {origin}, a formatted string based the address of the individual Resort a logged-in user is viewing as {destination}, and a secret API key {GOOGLE_MAPS_API_KEY} sourced from the secret .env file. This information is sent to the external Google Maps API, which returns extensive navigational information from 'origin' to 'destination'. We filter the 'distance' and 'current_travel_time' information from this response, and display it to the logged-in user on an individual Resort's page.

_____________________________________________________________________________________________________________________________________________________________
