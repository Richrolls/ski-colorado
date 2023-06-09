import React, { useState, useEffect } from "react";
import {
  useGetUserCommentsQuery,
  useGetResortsQuery,
  useGetAccountTokenQuery,
} from "../login/auth.js";
import { useParams, Link } from "react-router-dom";

const UserCommentList = () => {
  const { accountId } = useParams();
  const { data: resorts, isLoading: isResortsLoading } = useGetResortsQuery();
  const { data: token, isLoading: isTokenLoading } = useGetAccountTokenQuery();
  const { refetch } = useGetUserCommentsQuery(accountId);
  const { data: commentsData, isLoading: isCommentsLoading } = useGetUserCommentsQuery(accountId);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (commentsData && !isCommentsLoading) {
      setComments(commentsData.comments);
    }
  }, [commentsData, isCommentsLoading]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (isCommentsLoading || isResortsLoading || isTokenLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }

  const commentsWithResorts = comments.map((comment) => {
    const resort = resorts.find((resort) => resort.id === comment.resort_id);
    return {
      ...comment,
      resortName: resort ? resort.name : "Unknown resort",
    };
  });

  const emptystar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="#ffbf6c"
      className="bi bi-star"
      viewBox="0 0 16 16"
    >
      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
    </svg>
  );

  const halfstar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="#ffbf6c"
      className="bi bi-star-half"
      viewBox="0 0 16 16"
    >
      <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
    </svg>
  );

  const fullstar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="#ffbf6c"
      className="bi bi-star-fill"
      viewBox="0 0 16 16"
    >
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  );

  function stars(rating) {
    let rounded = Math.round(rating * 2) / 2;
    if (rounded === 0) {
      return (
        <>
          {emptystar}
          {emptystar}
          {emptystar}
          {emptystar}
          {emptystar}
        </>
      );
    } else if (rounded === 0.5) {
      return (
        <>
          {halfstar}
          {emptystar}
          {emptystar}
          {emptystar}
          {emptystar}
        </>
      );
    } else if (rounded === 1) {
      return (
        <>
          {fullstar}
          {emptystar}
          {emptystar}
          {emptystar}
          {emptystar}
        </>
      );
    } else if (rounded === 1.5) {
      return (
        <>
          {fullstar}
          {halfstar}
          {emptystar}
          {emptystar}
          {emptystar}
        </>
      );
    } else if (rounded === 2) {
      return (
        <>
          {fullstar}
          {fullstar}
          {emptystar}
          {emptystar}
          {emptystar}
        </>
      );
    } else if (rounded === 2.5) {
      return (
        <>
          {fullstar}
          {fullstar}
          {halfstar}
          {emptystar}
          {emptystar}
        </>
      );
    } else if (rounded === 3) {
      return (
        <>
          {fullstar}
          {fullstar}
          {fullstar}
          {emptystar}
          {emptystar}
        </>
      );
    } else if (rounded === 3.5) {
      return (
        <>
          {fullstar}
          {fullstar}
          {fullstar}
          {halfstar}
          {emptystar}
        </>
      );
    } else if (rounded === 4) {
      return (
        <>
          {fullstar}
          {fullstar}
          {fullstar}
          {fullstar}
          {emptystar}
        </>
      );
    } else if (rounded === 4.5) {
      return (
        <>
          {fullstar}
          {fullstar}
          {fullstar}
          {fullstar}
          {halfstar}
        </>
      );
    } else if (rounded === 5) {
      return (
        <>
          {fullstar}
          {fullstar}
          {fullstar}
          {fullstar}
          {fullstar}
        </>
      );
    }
  }

  commentsWithResorts.reverse();

  const handleCommentDelete = async (event, comment) => {
    event.preventDefault();
    const data = {};
    const user_id = accountId;
    const comment_id = comment.id;
    const commentUrl = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/accounts/${user_id}/comments/${comment_id}`;
    const fetchConfig = {
      method: "delete",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.access_token}`,
      },
    };
    const response = await fetch(commentUrl, fetchConfig);
    if (response.ok) {
      refetch();
    } else {
      alert("Failed to delete comment :(");
    }
  };

  return (
    <div
      className="container"
      style={{
        maxHeight: "762px",
        overflowY: "scroll",
        scrollbarWidth: "thin",
      }}
    >
      <div className="row justify-content-center">
        <div>
          <div style={{ borderRadius: 8, marginLeft: 0 }}>
            <div className="mx-auto container">
              <div>
                {commentsWithResorts.map((comment) => (
                  <div key={comment.id}>
                    <div>
                      <br />
                      <div className="bg-secondary bg-opacity-50 bg-gradient white-border">
                        {comment.user_id === token.account.id ? (
                          <button
                            className="delete-button"
                            onClick={(event) =>
                              handleCommentDelete(event, comment)
                            }
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              fill="currentColor"
                              className="bi bi-x"
                              viewBox="0 0 16 16"
                            >
                              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                          </button>
                        ) : null}
                        <h3>"{comment.comment}"</h3>
                        <h4>
                          <Link to={`/resorts/${comment.resort_id}`}>
                            {comment.resortName}
                          </Link>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          {stars(comment.rating)}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
                <br />
              </div>
            </div>
          </div>
        </div>
        <style>
          {`
          .container::-webkit-scrollbar {
            width: 10px;
          }

          .container::-webkit-scrollbar-track {
            background-color: #839CC6;
          }

          .container::-webkit-scrollbar-thumb {
            background-color: #f5f5f5;
            border-radius: 5px;
          }
        `}
        </style>
      </div>
    </div>
  );
};

export default UserCommentList;
