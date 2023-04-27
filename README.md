Welcome to SkiColorado, the ultimate community for Colorado ski and snowboard enthusiasts!


Developers

Richard Chong
Alex Drosos
Jack Glenn
Eric Mills
Anton Zaitsev


Project Summary

SkiColorado is an application that allows users to view and interact with information about various Colorado resorts.
Upon creation of an account, users can access a list of all resorts that participate with the Epic and Ikon passes in Colorado. This list can be filtered by price (1-5 prepopulated rating with 5 being the most expensive) and/or pass (Epic/Ikon).
Users can access current weather, daily forecast, travel information (distance and estimated travel time), and several other statistics for each resort.
Functionally, users can rate and comment on any resort and designate any resort as a favorite. Ratings and comments appear on both the individual resort page and the user's profile. An individual resort's page lists all ratings and comments for that resort and also displays the cumulative average of all ratings. A user's profile page lists all comments and ratings submitted by that user. When a user selects a resort as a favorite, that resort populates a list of favorites on the uesr's profile page as well as a dropdown menu for easy access that links to each individual resort.


Tech Stack

Backend: MongoDB, FastAPI, Python
Frontend: JavaScript, HTML/CSS, React, Redux Toolkit, Bootstrap
Deployment: Docker, Git


Seed Data

Prior to use, the app must be prepopulated with seed data (data for each individual resort), which can be found in .seeddata.py in the main directory. Resorts can be populated via a FastAPI (/8000/docs#/) "create resorts" request.


API and Signing Keys

Two external APIs, Google Maps API and WeatherAPI.com, and a Signing Key are utilized in SkiColorado. Keys must be formatted as follows:

OPENWEATHER_API_KEY=
GOOGLE_MAPS_API_KEY=
SIGNING_KEY=

These keys must be populated into the .env file in the main directory.


Dependencies
