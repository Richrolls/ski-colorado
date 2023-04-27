## FastAPI reads document from top to bottom: put all queries that have a specific {id_parameter} below all of the "get-all" requests so that both arent triggered when, for example, api/resorts/{resort_id} is passed




       RESORTS


Response: GET A LIST OF RESORTS
Endpoint Path: api/resorts
Endpoint Method: GET
Query Parameters: none
Headers:
   Authorization: Bearer Token
Response Shape (JSON):


"""
json
{
   "resorts": [
      {
   	“address”: str,
“city”: str,
“state”: str,
“zipcode”: int,
“name”: str,
	“photo_url”: str,
	“average_rating”: float,
	“elevation”: int,
	“price”: str
}
   ]
}
"""




Response: GET A SPECIFIC RESORT:
Endpoint Path: api/resorts/{resort_id}
Endpoint Method: GET
Query Parameters:
   {resort_id} used to identify a specific trip: INTEGER or STRING?
Headers:
   Authorization: Bearer Token
Response Shape (JSON):


"""
json
{
   	“AddressField”: str,
“CityField”: str,
“StateField”: str,
“ZipcodeField”: int,
“Name”: string,
	“photo_url”: string,
	“Average_rating”: float,
	“Elevation”: int,
	“Price”: string,
}
"""


Response: POST A RESORT (for seeding our DB)
Endpoint Path: api/resorts
Endpoint Method: POST
Query Parameters: none
Headers: Authorization: Bearer Token
Input Shape:
"""
json
{
	“AddressField”: str,
“CityField”: str,
“StateField”: str,
“ZipcodeField”: int,
“Name”: string,
	“photo_url”: string,
	“Average_rating”: float,
	“Elevation”: int,
	“Price”: string,



}
"""
Response Shape:
"""
json
{
	“_id”: string (automatically generated),
	“Address”: str,
“City”: str,
“State”: str,
“Zipcode”: int,
“Name”: string,
	“photo_url”: string,
	“Average_rating”: float,
	“Elevation”: int,
	“Price”: string,




}
"""




Response: UPDATE A RESORT 
Endpoint Path: api/resorts/{resort_id}
Endpoint Method: PUT
Query Parameters: {resort_id}
Headers: superuser auth?
Input Shape:
"""
json
{
	“AddressField”: str,
“CityField”: str,
“StateField”: str,
“ZipcodeField”: int,
“Name”: string,
	“photo_url”: string,
	“Average_rating”: float,
	“Elevation”: int,
	“Price”: string,
}
"""
Response Shape:
"""
json
{
	“Address”: str,
“City”: str,
“State”: str,
“Zipcode”: int,
“Name”: string,
	“photo_url”: string,
	“Average_rating”: float,
	“Elevation”: int,
	“Price”: string,
}
"""




Response: DELETE A RESORT (less important than the rest)
Endpoint Path: api/resorts/{resort_id}
Endpoint Method: DELETE
Query Parameters: {resort_id}
Headers: superuser auth?
Response Shape:
"""
json
{
	“Message”: “Resort has been deleted”
}
"""


--------------------------------------------------------


           USERS


Response: GET A LIST OF ALL USERS (from which to display all comments?)
Endpoint Path: api/users/
Endpoint Method: GET
Query Parameters: none
Headers:
   Authorization: Bearer Token
Response Shape (JSON):


"""
json{
   "users":[
       {
	“_id”: str,
      	“first_name”: str,
“last_name”: str,
“user_name”: str,
“password”: str,
“email”: str,
“address”: str,
“city”: str,
“state”: str,
“zipcode”: int,
“ski”: bool,
“snowboard”: bool,
“picture_url”: str (default = URL to default pic),
       }
   ]
}
"""


Response: GET A SPECIFIC USER DETAIL (for profile page)
Endpoint Path: api/users/{user_id}
Endpoint Method: GET
Query Parameters:
   {user_id} = used to identify specific user, ideally by auto-generated MongoDB ID
Headers:
   Authorization: Bearer Token
Response Shape (JSON):
"""
json
{
“first_name”: str,
“last_name”: str,
“user_name”: str,
“password”: str,
“email”: str,
“address”: str,
“city”: str,
“state”: str,
“zipcode”: int,
“ski”: bool,
“snowboard”: bool,
“picture_url”: str (default = URL to default pic)
}
"""


Response: CREATE A USER
Endpoint Path: api/users/
Endpoint Method: POST
Query Parameters: None
Headers:
	Authorization: Bearer Token
Request Shape:
"""
json
{
“first_name”: str
“last_name”: str
“user_name”: str
“password”: str
“email”: str
“address”: str
“city”: str
“state”: str
“zipcode”: int
“ski”: bool (default = False)
“snowboard”: bool (default = False)
“picture_url”: bool (default = URL to default pic)
}
"""


Response Shape:
"""
json
{
	“_id”: str
“first_name”: str
“last_name”: str
“user_name”: str
“password”: str
“email”: str
“address”: str
“city”: str
“state”: str
“zipcode”: int
“ski”: bool (default = False)
“snowboard”: bool (default = False)
“picture_url”: bool (default = URL to default pic)
}
"""


Response: UPDATE A USER INFO (stretch goal)
Endpoint Path:
Endpoint Method:
Query Parameters:
Headers:
Response Shape:




Response: DELETE A USER
Endpoint Path:
Endpoint Method:
Query Parameters:
Headers:
Response Shape:




--------------------------------------------------------


           COMMENTS (Includes optional rating)


Response:  LIST ALL COMMENTS
Endpoint Path: /api/comments
Endpoint Method: GET
Query Parameters:
Headers:
	Authorization: Bearer Token
Response Shape:
"""
json
{
	comments:[
{
			“rating”: int,
			“comment”: str,
			“user_id”: str, reference to user id
			“resort_id”: str, reference to resort id
			}
]
}
"""




Response: GET SPECIFIC COMMENT'S DETAILS (is this necessary? Or can we just filter the list-all comments wherever we need?)
Endpoint Path: api/comments/{comment_id}
Endpoint Method: GET
Query Parameters: {comment_id}
Headers:
Response Shape:
"""
json
{
	“rating”: int,
	“comment”: str,
	“user_id”: str, reference to user id
	“resort_id”: str, reference to resort id
}
"""




Response: POST COMMENT
Endpoint Path: /api/comments
Endpoint Method: POST
Query Parameters:
Headers:
Request Shape:
"""
json
{
	“rating”: int,
	“comment”: str,
}
"""


Response Shape:
"""
json
{
	“rating”: int,
	“comment”: str,
	“user_id”: str, reference to user id
	“resort_id”: str, reference to resort id
}
"""




Response: EDIT COMMENT (stretch goal)
Endpoint Path: api/comments/{comment_id}
Endpoint Method: PUT
Query Parameters: {comment_id}
Headers:
Response Shape:




Response: DELETE COMMENT (stretch goal)
Endpoint Path: api/comments/{comment_id}
Endpoint Method: DELETE
Query Parameters: {comment_id}
Headers:
Response Shape:


--------------------------------------------------------------------------


           FAVORITES


Response: LIST ALL FAVORITES
Endpoint Path:
Endpoint Method:
Query Parameters:
Headers:
Response Shape:






Response: LIST SINGLE USER'S FAVORITES
Endpoint Path:
Endpoint Method:
Query Parameters:
Headers:
Response Shape:




Response: CREATE FAVORITE
Endpoint Path:
Endpoint Method:
Query Parameters:
Headers:
Response Shape:




Response: UNFAVORITE
Endpoint Path:
Endpoint Method:
Query Parameters:
Headers:
Response Shape:




------------------------------------------------------------------


           GOOGLE MAPS


Response: GET MAPS DATA
Endpoint Path: Google Maps API
Endpoint Method: GET
Query Parameters: https://maps.googleapis.com/maps/api/directions/json?origin={UserStreetNumber}+{UserStreetName}+{UserStreetName2}+{UserCity}+{UserState}&destination={ResortStreetNumber}+{ResortStreetName}+{ResortStreetName2}+{ResortCity}+{ResortState}&key={GoogleMapsAPIKey}
Headers: none
Response Shape: {
   "copyrights": str
   "routes": {
      "legs" {
         "distance" : {
            "text": str
         }
         "duration" : {
            "text" str
         }
      }
   }
}


------------------------------------------------------------------


           WEATHER


Response: GET WEATHER DATA
Endpoint Path: WeatherAPI Data
Endpoint Method: GET
Query Parameters: http://api.weatherapi.com/v1/current+forecast.json?key={WeatherAPIKey}&q={ResortCity}+{ResortState}
Headers: none
Response Shape: {
   "current": {
      "temp_f": int,
      "wind_mph": int,
      "feelslike_f": int,
      "uv": int
   }
   "forecast": {
      "forecastday": {
         "day": {
            "maxtemp_f": int,
            "mintemp_f": int,
            "totalprecip_in": int,
            "daily_chance_of_snow": int,
         }
      }
   }
}




------------------------------------------------------------------
