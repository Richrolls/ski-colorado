3/27/2023
    Worked with Alex and Anton to come up with API routes. Jack shared his screen and took the lead on coding. We made the models for Resorts, Accounts, Favorites, and Comments; We also made the queries to get, post, put, and delete resorts. Got over our first major hurdle as a team and got our resort list query working.

    I realized that I need to go back and go over how FastAPI works, felt we could have been much farther ahead if I had more to contribute. Felt like all I could do was support instead of work through a section.

3/28/2023
    Worked as a group to finish coding in the API routes for resorts, accounts, favorites, and comments. Also got authentication working for the routes.

    Looking forward to working on the front end and seeing the project in action.

3/29/2023
    Got more progress on getting the favorites queries to work, we will need to see if we can get the queries to work with a single Model rather than ModelIn and ModelOut. I started working on the LoginForm.js file. I will need to figure out how to create a token upon account creation.

    Looking forward to figuring out how to link front-end and back-end. Confused on how to implement the token generation.

3/30/2023
    Got the SignupForm to work and create an account on the backend. Had to remove the ski/snowboard checkboxes until I figure out how to add data from checkboxes, should be easily doable. I will probably save most of the styling until we have all the pages working. Realized I did not have to generate the token on my own.

    Looking forward to figuring out how to add and implement checkboxes.

4/3/2023
    Started work on the ResortDetail.js page. Was able to link the front-end to the database. Was able to display resorts in the database on the resort detail page. Changed the link in the ResortList.js file to now link to the corresponding ResortDetail.js page. Not exactly sure how to get the data of the current user for the 3rd party APIs.

    Looking forward to figuring out how to get the current user's data and pull data from the 3rd party APIs.

4/4/2023
    Started working on changing the Signup.js from react to redux-react. Still a giant work in progress, trying to learn how redux works while attempting to implement it.

    Looking forward to figuring out how to implement redux.

4/5/2023
    Finished swapping the SignupForm.js from react to react-redux. It mostly involved changing the onChange for each of the fields. Previously, the code to set the fields and the state of the fields was in the SignupForm.js file, additionally the code to handle changes was in a function called handleFormChange. That has all been moved to the signupSlice.js file. The initial states, as well as the code to handleFormChange(reducers), are now in the singupSlice.js file and imported into the Signup.jsx file. We still need to add the authentication functionality to the Signup page, the user should be logged in upon creating a new account. There was a mistake where I changed the name of the SignupForm.js to Signup.jsx on my working branch and subsequent changes that were made to the CSS of the page was invalidated and had to be redone. Learned to confirm before changing the layout/naming of files in the project.

    Looking forward to finalizing the Signup page and getting to work on other pages that come after.

4/6/2023
    The team came together and we decided on a file organization system to avoid any future mishaps. We worked on styling for the login and signup pages. We need to start working on front-end authorization. Now that we are able to generate the token, we need to started seeing if the front-end authorization works by uncommenting the authorization on the routers. We need to implement the signout feature to see if the token goes away.

    Looking forward to figuring out how to implement the signout feature.

4/17/2023
    Before leaving for break we were able to get authorization working for all of our routers that needed it. The ResortList page works, it displays a list of all of our resorts only when logged in. I am currently trying to figure out how to make queries to 3rd party APIs. Once that is done, the functionality of the rest of the project should be repeats of completed features.

    Looking forward to figuring out how to make requests to 3rd party APIs.

4/18/2023
    We worked on getting the distance data from the google maps api. After many attempts we were able to get query the 3rd party api and get the data to show on the frontend. That was the last big hurdle we had to overcome and everything from now on should be a repeat of an existing feature.

    Looking forward to finally working on a different feature of the website.

4/19/2023
    I worked on getting the currently available data to show on the frontend on the profile page. I was able to successfully get all the data showing, functionally it is done until we get the comments and favorites working. The group is currently working on css/formating for the ResortDetail page and getting the comments to work. I started work on favorites. I have an idea of how I think it should work, we'll see if it works tomorrow.

    Looking forward to getting favorites working.

4/20/2023
    Worked on getting a favorite button working, was successful in creating a button that would create a favorite. However, the next issue that has arisen is how to implement the unfavorite feature. I also helped Jack in getting the comment creation feature working.

    Looking forward to getting the unfavorite feature working.

4/24/2023
    I worked on getting the favorite/unfavorite feature working. The previously existing favorite button would be replaced when pressed and would show a new unfavorite button. Due to it being done through redux, the button refreshes automatically. I also changed the default picture to be our custom skiier icon. Most of the larger features have been completed and now there are just a few smaller features such as listing out the comments and favorites.

    Looking forward to getting the list of favorites working.

4/25/2023
    Noticed there was a bug with the favorites button. Was able to fix it. We also met with Riley and we were told that the way our queries were done, there were security vulnerabilities. I was able to redo the query to create a favorite automatically get the resort_id and user_id of the logged in user and to not take any user input data so another user can't send in a post request and make a favorite for another user. We are currently working on comments to fix the same vulnerabilities.

    Looking forward to getting the comments fixed.

4/26/2023
    We finished refactoring the routes/queries for the comments and favorites. Was also able get the Favorite list to show on the profile page. Used the same logic to get the favorites to list on the navbar. I believe we have most of the major features done, we will now be more focused on cleaning up the code.

    Looking forward to being done with the project.
