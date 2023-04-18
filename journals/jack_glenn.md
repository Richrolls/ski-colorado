3/24/23 - Initialized project fork. Previously during the week, team roles were elected and assigned, a code of conduct was collaboratively
assembled and agreed to, project wireframing was collaboratively completed, and necessary APIs were identified. Requisite API keys were obtained,
and API data was successfully queried and returned via Insomnia.

3/27/23 - Began day by splitting into two teams, one to work on API framing and another to work on authentication. For continuity and consistency, reverted to single team to complete API framing before working on authentication. Strictly defined all MongoDB collection schemas in docs/api-design.md, and achieved get all, get single, create, and delete query/router functionalities for the 'resorts' collection and successfully tested/implemeted via FastAPI browser.

3/28/23 - Began day by initializing authentication for Account and Comment API endpoints via codealong with lecture. Team Standup followed lecture, and we agreed to work on applying authentication to other models. Afternoon was spent learning how to apply endpoint authentication to the Resorts models, which are not directly associated with a user_id. Successfully implemented by end of day, team plans to work on applying authentication to Favorites tomorrow.

3/29/23 - Completed application of authentication control to Favorites and other API routes that need it. Spent majority of afternoon learning how to associate a specific 'Favorite' instance with the creating user. Spent rest of day unsuccessfully attempting to extract the implicitly created (I think?) '_id' attribute from instances of 'Favorite'. After extensive googling and consultation with group members and SEIR, reverted 'Favorite' to 'FavoriteIn/FavoriteOut' which successfully allowed retrieval of implicitly-generated '_id' value while maintaining logged-in-user association with new 'FavoriteIn' instance creations. Successfully used this FavoriteOut.id attribute to access and retrieve single instances of 'FavoriteOut', as well as delete 'Favorite' documents.

3/30/23 - Applied authentication to CommentIn/CommentOut as well as api/accounts/{account_id} endpoint, which will be used to display an individual user's Profile Page information. Reflected as a team on project direction and team dynamics. Developed a plan to share leadership responsibilities throughout the course of the project so that everyone gets an opportunity to function in the team lead role. Outlined general strategy for next week's development work.

4/3/23 - Worked with Anton to frame Home.js component and begain framing ResortList.js component. Modeled containers with group input and successfully accessed and retrived data from the Resorts API. Rendered each item in list of resorts on ResortList.js as a hyperlink to its respective individual resort page. Encountering routing errors while doing so, will address tomorrow.

4/4/23 - Created and deployed Checkbox() function to reduce HTML/CSS redundancy in src/components/Home.js. Created and deployed functionalities to create many instances of ResortIn, CommentIn, and FavoriteIn at once vs having to manually enter each instance every time the database is destroyed/recreated. For rest of evening, learning how to set up Redux functionality to get average of all user ratings for each resort, store that value in Redux cache, and automatically update that value every time a new rating value is entered.

4/5/23 - Learned how to impleemnt pathing for various onClick() and onSubmit() button events. Implemented these for several buttons. Helped troubleshoot Login and Signup page programming. Helped reconcile git issues.

4/6/23 - Reorganized ghi/src file into consistent, repeateable patterns to avoid future problems. Troubleshot all associated import pathing errors with file reorganization.

4/17/23 - Returned from Spring Break! Reacquainted myself with the project's status, successfully refactored backend Comments model to allow access to all Comment instances. Frontend will filter Comments as necessary. For ResortDetail pages, filtered comments by resort_id attribute. Implemented average rating function for each resort, unstylized yet.
