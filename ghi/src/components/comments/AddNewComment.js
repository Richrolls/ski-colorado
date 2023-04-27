import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {useGetResortCommentsQuery, useGetAccountTokenQuery} from "../login/auth";

const StarRating = ({ selectedRating, handleStarClick }) => {
  const [hoveredRating, setHoveredRating] = useState(null);
  return (
    <>
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        const filled = ratingValue <= (hoveredRating || selectedRating);

        return (
          <span
            key={index}
            className="star"
            onClick={() => handleStarClick(ratingValue)}
            onMouseEnter={() => setHoveredRating(ratingValue)}
            onMouseLeave={() => setHoveredRating(null)}
          >
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill={filled ? "#ffbf6c" : "none"}
              stroke="#ffbf6c"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.52 18.18 21 12 17.77 5.82 21 7 14.52 2 9.27 8.91 8.26 12 2" />
            </svg>
          </span>
        );
      })}
    </>
  );
};

export const NewCommentForm = () => {
  const [comment, setComment] = useState("");
  const [selectedRating, setSelectedRating] = useState(0);
  const { thisResort } = useParams();
  const { data: token } = useGetAccountTokenQuery();
  const { refetch } = useGetResortCommentsQuery(thisResort);

  const handleStarClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleCommentChange = (e) => setComment(e.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};
    data.rating = selectedRating;
    data.comment = comment;
    data.user_id = token?.account.id;
    data.resort_id = thisResort;
    const commentUrl = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/resorts/${thisResort}/comments`;
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.access_token}`,
      },
    };
    const response = await fetch(commentUrl, fetchConfig);
    if (response.ok) {
      setSelectedRating(0);
      setComment("");
      refetch();
    } else {
      alert("Failed to create new comment :(");
    }
  };

  return (
    <section>
      <h2 className="underlined">Post a Comment</h2>
      <form>
        <br />
        <div className="mb-3">
          <textarea
            id="commentContent"
            name="commentContent"
            value={comment}
            onChange={handleCommentChange}
            style={{
              width: "80%",
              height: "86px",
            }}
            className="mx-auto bg-secondary bg-opacity-50 bg-gradient white-border"
          />
        </div>
        <br />
        <br />
        <h3 htmlFor="commentRating">
          Rating:&nbsp;&nbsp;
          <StarRating
            selectedRating={selectedRating}
            handleStarClick={handleStarClick}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button
            type="button"
            className="butt btn-sm btn-primary"
            onClick={handleSubmit}
          >
            Post
          </button>
        </h3>
      </form>
      <br />
    </section>
  );
};
