
        RESORTS

RESPONSE: Get a list of resorts
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


RESPONSE: Get a Specific Resort:
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

--------------------------------------------------------

            USERS

RESPONSE: Get a list of all users (from which to display all comments?)
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
            FirstNameField: str
            LastNameField: str
            UserNameField: str
            PasswordField: str
            EmailField: str
            AddressField: str
            CityField: str
            StateField: str
            ZipcodeField: int
            SkiField: bool (default = False)
            SnowboardField: bool (default = False)
            PictureUrl: bool (default = URL to default pic)
        }
    ]
}
"""

RESPONSE: Get a Specific User Details (for profile page)
Endpoint Path: api/users/{user_id}
Endpoint Method: GET
Query Parameters:
    {user_id} = used to identify specific user, ideally by auto-generated MongoDB ID
Headers:
    Authorization: Bearer Token
Response Shape (JSON):
"""
json{
    "users":[
        {user_id:
            {
                FirstNameField: str
                LastNameField: str
                UserNameField: str
                PasswordField: str
                EmailField: str
                AddressField: str
                CityField: str
                StateField: str
                ZipcodeField: int
                SkiField: bool (default = False)
                SnowboardField: bool (default = False)
                PictureUrl: bool (default = URL to default pic)
            }
        }
    ]
}
"""

--------------------------------------------------------

            COMMENTS

RESPONSE: Get a list of all comments

RESPONSE: Get a specific comment's details (is this necessary? Or can we just filter the list-all comments wherever we need?)

--------------------------------------------------------------


            RATINGS

RESPONSE: Get a list of all RATINGS

RESPONSE: Get a single RATING


------------------------------------------------------------------

            GOOGLE MAPS


------------------------------------------------------------------

            WEATHER


------------------------------------------------------------------
