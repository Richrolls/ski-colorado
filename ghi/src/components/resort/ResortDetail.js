import React from "react";
import { useParams } from "react-router-dom";
import { useGetResortQuery, useGetCommentsQuery } from "../login/auth.js";
import NavLoggedIn from "../header/NavLoggedIn.js";
import ResortFilteredCommentList from "../comments/ResortFilteredCommentList.js";
import IndividualComment from "../comments/IndividualComment.js";
import AverageRatingByResort from "../comments/AverageRatingFunction.js";

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
      <div className="row bg-primary">
        <div className="col-4 bg-info min-vh-100">
          <div>
            <a
              href={data.resort_website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 className="text-center">{data.name}</h1>
            </a>
            {/* Change this to resort name later */}
            <div className="text-center"></div>
          </div>
          <div className="rounded bg-white m-3">
            <h2 className="text-center">Resort Info</h2>
            <p className="text-center">
              {data?.address}
              <br></br> {data?.city}, {data?.state} {data?.zipcode}
            </p>
            <p className="text-center">
              Top Elevation: {addComma(data?.elevation)} ft<br></br>Vertical
              Drop: {addComma(data?.vertical_drop)} ft<br></br>Number of Trails:{" "}
              {data?.num_trails}
            </p>
            <p className="text-center">
              Price Rating: {dollarPrice(data?.price)}
            </p>
            <p className="text-center">Distance/Travel Time</p>
          </div>
          <div className="text-center">
            <img src={data?.photo_url} alt={data.name}></img>
          </div>
        </div>
        <div className="col-auto">
          <div>
            <ResortFilteredCommentList
              comments={data.comments}
              thisResort={thisResort}
            />
          </div>
          <div>
            <AverageRatingByResort />
          </div>
        </div>
      </div>
    </>
  );
}
