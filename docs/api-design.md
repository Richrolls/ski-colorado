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
       {...}
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
   "resort_id": [
       {...}
   ]
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




Response: UPDATE A RESORT (if we eff up seeding DB, or for future-proofing resort pages)
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


           COMMENTS


Response:  LIST ALL COMMENTS FOR USER
Endpoint Path: /api/comments
Endpoint Method:
Query Parameters:
Headers:
Response Shape:




Response: GET SPECIFIC COMMENT'S DETAILS (is this necessary? Or can we just filter the list-all comments wherever we need?)
Endpoint Path:
Endpoint Method:
Query Parameters:
Headers:
Response Shape:




Response: POST COMMENT
Endpoint Path:
Endpoint Method:
Query Parameters:
Headers:
Response Shape:




Response: EDIT COMMENT
Endpoint Path:
Endpoint Method:
Query Parameters:
Headers:
Response Shape:




Response: DELETE COMMENT (stretch goal?)
Endpoint Path:
Endpoint Method:
Query Parameters:
Headers:
Response Shape:




--------------------------------------------------------------




           RATINGS


Response: LIST ALL RATINGS
Endpoint Path: api/ratings
Endpoint Method:
Query Parameters:
Headers:
Response Shape:




Response: LIST ALL SINGLE RESORT'S RATINGS
Endpoint Path:
Endpoint Method:
Query Parameters:
Headers:
Response Shape:




Response: GET A SINGLE RATING
Endpoint Path:
Endpoint Method:
Query Parameters:
Headers:
Response Shape:




Response: LIST ALL SINGLE USER'S RATINGS
Endpoint Path:
Endpoint Method:
Query Parameters:
Headers:
Response Shape:




Response: POST RATING
Endpoint Path:
Endpoint Method:
Query Parameters:
Headers:
Response Shape:




Response: UPDATE RATING (stretch goal)
Endpoint Path:
Endpoint Method:
Query Parameters:
Headers:
Response Shape:




Response: DELETE RATING (stretch goal)
Endpoint Path:
Endpoint Method:
Query Parameters:
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
Endpoint Path: Google Maps API (Jack to fill in)
Endpoint Method: GET
Query Parameters: https://maps.googleapis.com/maps/api/directions/json?origin={UserStreetNumber}+{UserStreetName}+{UserStreetName2}+{UserCity}+{UserState}&destination={ResortStreetNumber}+{ResortStreetName}+{ResortStreetName2}+{ResortCity}+{ResortState}&key={APIKey}
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
Endpoint Path: WeatherAPI Data (Eric to fill in)
Endpoint Method: GET
Query Parameters: http://api.weatherapi.com/v1/current+forecast.json?key=98ddf4600bf84fad95f172311232303&q=Breckenridge+CO
Headers:
Response Shape:




------------------------------------------------------------------
