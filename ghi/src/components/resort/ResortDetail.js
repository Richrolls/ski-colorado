import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetResortQuery } from "../login/auth.js";
import NavLoggedIn from "../header/NavLoggedIn.js";
import ResortCommentList from "../comments/ResortCommentList.js";
import AverageRatingByResort from "../comments/AverageRatingFunction.js";
import Directions from "../directions/Directions.js";
import Weather from "../weather/CurrentWeather.js";
import DailyForecast from "../weather/DailyForecast.js";
import { NewCommentForm } from "../comments/AddNewComment.js";
import Favorite from "../favorites/Favorite.js";
import { useGetAccountQuery } from "../login/auth";

export default function ResortDetail() {
  const { data: account } = useGetAccountQuery();
  const { thisResort } = useParams();
  const { data, error, isLoading } = useGetResortQuery(thisResort);

  if (account) {
    if (!data) {
      return <div>Loading...</div>;
    }

    function dollarPrice(resortprice) {
      return "$".repeat(resortprice);
    }

    function addComma(num) {
      const str = num.toString();
      if (str.length == 5 || str.length == 4) {
        return str.slice(0, -3) + "," + str.slice(-3);
      } else {
        return num;
      }
    }

    return (
      <>
        <NavLoggedIn />
        <div className="text-center">
          <div className="col">
            <div className="row row-cols-3">
              <div
                className="shadow p-4 mt-4 bg-primary bg-gradient"
                style={{
                  borderRadius: 8,
                  height: 770,
                  width: "20%",
                  marginLeft: 52,
                }}
              >
                <h2 className="underlined">Current Weather</h2>
                <div>
                  <Weather />
                </div>
                <h2 className="underlined">Today's Forecast</h2>
                <div>
                  <DailyForecast />
                </div>
                <br />
                <div
                  className="shadow p-4 mt-4 bg-primary bg-gradient"
                  style={{
                    borderRadius: 8,
                    left: 0,
                    height: "auto",
                    width: "100%",
                  }}
                >
                  <h2 className="underlined">Travel Information</h2>
                  <div>
                    <Directions />
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="container">
                    <div
                      className="center shadow p-4 mt-4 bg-primary bg-gradient"
                      style={{ borderRadius: 8 }}
                    >
                      <div
                        className="d-flex justify-content-center"
                        style={{ paddingBottom: 14 }}
                      >
                        <Favorite />
                      </div>
                      <h1
                        className="snow title-link"
                        style={{ paddingBottom: 4 }}
                      >
                        <Link
                          to={data.resort_website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {data.name}
                        </Link>
                      </h1>
                      <div className="text-center">
                        <br />
                        <img
                          className="resort-photo rounded"
                          src={data?.photo_url}
                          alt={data.name}
                        ></img>
                      </div>
                      <div className="rounded m-3">
                        <br />
                        <h2 className="text-center underlined">Address</h2>
                        <h4 className="text-center">
                          {data?.address}
                          <br></br> {data?.city}, {data?.state} {data?.zipcode}
                        </h4>
                      </div>

                      <div className="container">
                        <div className="row">
                          <div
                            className="col shadow p-4 mt-4 bg-primary bg-gradient"
                            style={{
                              borderRadius: 8,
                              marginLeft: 0,
                              marginRight: 10,
                            }}
                          >
                            <h2 className="underlined">Stats</h2>
                            <h4 className="text-center">
                              Top Elevation: {addComma(data?.elevation)} ft
                              <br></br>
                              Vertical Drop: {addComma(data?.vertical_drop)} ft
                              <br></br>
                              Number of Trails: {data?.num_trails}
                              <br></br>
                              Price Rating: {dollarPrice(data?.price)}{" "}
                            </h4>
                          </div>
                          <div
                            className="col shadow p-4 mt-4 bg-primary bg-gradient"
                            style={{ borderRadius: 8, marginLeft: 0 }}
                          >
                            <AverageRatingByResort />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="right shadow p-4 mt-4 bg-primary bg-gradient"
                style={{
                  borderRadius: 8,
                  marginRight: 0,
                  marginLeft: 52,
                  height: "auto",
                  width: "30%",
                }}
              >
                <div>
                  <NewCommentForm />
                </div>
                <div>
                  <ResortCommentList
                  // comments={data.comments}
                  // thisResort={thisResort}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div>
        <h1>Please log in/sign up to use website functionality</h1>
        <h3>
          <Link to="/login" className="link-warning">
            Click here to login.
          </Link>
        </h3>
        <h3>
          <Link to="/signup" className="link-warning">
            Click here to signup.
          </Link>
        </h3>
      </div>
    );
  }
}
