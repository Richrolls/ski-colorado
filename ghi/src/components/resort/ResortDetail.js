import React from "react";
import { useParams } from "react-router-dom";
import {
  useGetResortQuery,
  useGetCommentsQuery,
  useGetAccountQuery,
} from "../login/auth.js";
import NavLoggedIn from "../header/NavLoggedIn.js";
import ResortFilteredCommentList from "../comments/ResortFilteredCommentList.js";
import IndividualComment from "../comments/IndividualComment.js";
import AverageRatingByResort from "../comments/AverageRatingFunction.js";
import Directions from "../directions/Directions.js";
import { NewCommentForm } from "../comments/AddNewComment.js";

export default function ResortDetail() {
  const { thisResort } = useParams();
  const { data, error, isLoading } = useGetResortQuery(thisResort);

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
                height: 260,
                width: "20%",
                marginLeft: 52,
              }}
            >
              <h2 style={{ paddingBottom: 12 }} className="underlined">
                Current Weather
              </h2>
              <div
                className="mx-auto w-50 bg-secondary bg-opacity-50 bg-gradient white-border"
                style={{ paddingTop: 20 }}
              >
                <h3>Temp</h3>
              </div>
              <br />
              <div
                className="mx-auto w-50 bg-secondary bg-opacity-50 bg-gradient white-border"
                style={{ paddingTop: 20 }}
              >
                <h3>Precip</h3>
              </div>
              <br />
              <br />
              <div
                className="shadow p-4 mt-4 bg-primary bg-gradient"
                style={{
                  borderRadius: 8,
                  left: 0,
                  height: 300,
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
                    <a
                      href={data.resort_website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h1 className="snow title-link">{data.name}</h1>
                    </a>
                    <div className="text-center">
                      <img
                        className="resort-photo"
                        src={data?.photo_url}
                        alt={data.name}
                      ></img>
                    </div>
                    <div className="rounded m-3">
                      <h2 className="text-center underlined">Resort Info</h2>
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
                height: 950,
                width: "30%",
              }}
            >
              <div>
                <NewCommentForm/>
              </div>
              <div>
                <ResortFilteredCommentList
                  comments={data.comments}
                  thisResort={thisResort}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
