Welcome to SkiColorado, the ultimate community for Colorado ski and snowboard enthusiasts!


DEVELOPERS

Richard Chong
Alex Drosos
Jack Glenn
Eric Mills
Anton Zaitsev

__________________________________________________________________________________________________________________________________

PRODUCT SUMMARY

SkiColorado is an application that allows users to view and interact with information about various Colorado resorts.

- Users can signup for an account and login/logout of that account.
- A user must be logged in to interact with the application.
- On the main page, users can view a list of all Colorado ski resorts that participate with either of the Epic or Ikon ski passes.
- Users can dynamically filter the list of resorts displayed to them by pass (Epic/Ikon), relative price range, or both.
- In addition to the dynamic list of resorts, users are shown a navigation bar, a widget of Colorado's current weather, and a window displaying the Colorado Department of Transportation (CDOT) Twitter feed.
- On the main page, each listed resort is a clickable link that takes the user to that individual resort's Detail page.
- This Resort Detail page displays information about the resort, including current/forecast weather conditions and the current driving distance to that resort based on the user's address information entered on signup.
- On the Resort Detail page, users are able to rate and leave comments on the resort. The page displays to the user a list of all comments/ratings on that resort, including those from other users. The cumulative average ratings of the resort are graphically displayed to the user. Users are able to click the displayed username of another user's comment in order to navigate to the other user's Profile page. A user is able to also 'favorite' or 'unfavorite' a given resort from this page.
- On the Profile page, user-specific information is displayed including location, list of favorited resorts, and a list of their ratings/comments. By back-end design, users are not able to see sensitive information of other users (full name, address, email). Each 'favorite' and 'rating/comment' item is a link to the respective Resort Detail page.
- A Navigation Bar visible for every logged-in user provides easy navigation access to the Home page, Profile page, and a dropdown list of links to the logged-in user's favorite resorts.


__________________________________________________________________________________________________________________________________

PRODUCT SETUP INSTRUCTIONS

This project uses FastAPI for the backend framework, MongoDB for the database, Docker for containerization, React for the frontend framework, and Redux for select frontend functionalities. It also requires API keys from GoogleMapsAPI, and WeatherAPI.com. Follow instructions on those websites to obtain API keys before launching this project. To get started with this project, follow these instructions:

1. Fork and clone this repository into your chosen directory on your local machine.

2. Install Docker Desktop on your local machine.

3. Build your Docker images and containers, and launch the project via the following terminal commands in your project directory:
    > docker volume create mongo-db
    > docker-compose build
    > docker-compose up

4. Allow time for your Docker images to build and containers to run.

5. The FastAPI SwaggerUI may be accessed at 'http://localhost:8000/docs#/' in your browser

6. The React application may be accessed at 'http://localhost:3000' in your browser

7. This project requires several environment variables to be created and used in order to work properly. In your IDE, at your main project directory, create a file called '.env' to store your secret keys.

8. Within '.env', create and store keys as such, replacing <yourkeyhere> with your Key as a string:

    SIGNING_KEY=<yourkeyhere>
    OPENWEATHER_API_KEY=<yourkeyhere>
    GOOGLE_MAPS_API_KEY=<yourkeyhere>

   The Weather and GoogleMaps are obtained from the WeatherAPI.com and GoogleMapsAPI external 3rd party sites. The SIGNING_KEY is any 32-character string you choose, ideally randomly generated using a key generator of your choosing. This is required for user authentication to function properly.

9. Ensure that your api/requirements.txt and docker-compose.yaml files are set up correctly. These will install the necessary libraries and dependencies for this project.

    - api/requirements.txt should read:
        fastapi[all]==0.89.0
        uvicorn[standard]==0.17.6
        pytest==7.3.1
        pymongo==4.3.3
        jwtdown-fastapi==0.5.0
        requests
        pytest==7.3.1
        black==23.3.0

    - docker-compose.yaml should read:
        volumes:
            mongo-data:
                external: true
        services:
        mongo:
            image: mongo:6
            volumes:
            - mongo-data:/data/db
            environment:
            MONGO_INITDB_ROOT_USERNAME: admin
            MONGO_INITDB_ROOT_PASSWORD: password
        api:
            build:
            context: api
            dockerfile: Dockerfile.dev
            ports:
            - 8000:8000
            volumes:
            - ./api:/app
            environment:
            SIGNING_KEY: ${SIGNING_KEY}
            MONGO_URL: mongodb://admin:password@mongo
            GOOGLE_MAPS_API_KEY: ${GOOGLE_MAPS_API_KEY}
            WEATHER_API_KEY: ${WEATHER_API_KEY}
        ghi:
            image: node:lts-bullseye
            command: /bin/bash run.sh
            working_dir: /app
            volumes:
            - ./ghi:/app
            ports:
            - "3000:3000"
            environment:
            HOST_OS: ${OS}
            NODE_ENV: development
            HOST: "0.0.0.0"
            PUBLIC_URL: http://localhost:3000
            REACT_APP_SAMPLE_SERVICE_API_HOST: http://localhost:8000

    You may change your preferred ports by altering the values of api:ports:8000:8000 and ghi:ports:"3000:3000". Be sure to change PUBLIC_URL and REACT_APP_SAMPLE_SERVICE_API_HOST accordingly.

10. This project requires the data for Resorts to be populated in order to achieve full functionality. At the main project level directory, you will see a file called '.seeddata.py'. Within this file is a list of all Resorts. Using the FastAPI SwaggerUI at 'http://localhost:8000/docs#/', copy and paste the list of resorts from '.seeddata.py' into the "Create Resort" SwaggerUI function to seed your database with resort information.

11. Your project is now ready to run and interact with! Begin by navigating to 'http://localhost:3000' in your preferred browser, and sign up for an account.
__________________________________________________________________________________________________________________________________
