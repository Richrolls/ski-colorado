import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGetResortCommentsQuery, useGetAccountTokenQuery } from '../login/auth'

const StarRating = ({ selectedRating, handleStarClick }) => {
  const [hoveredRating, setHoveredRating] = useState(null);

  return (
    <div>
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
              fill={filled ? "#F2C94C" : "none"}
              stroke="#F2C94C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.52 18.18 21 12 17.77 5.82 21 7 14.52 2 9.27 8.91 8.26 12 2"
              />
            </svg>
          </span>
        );
      })}
    </div>
  );
};

export const NewCommentForm = () => {
    const [rating, setRating]  = useState('')
    const [comment, setComment] = useState('')
    const [selectedRating, setSelectedRating] = useState(0)
    const { thisResort } = useParams();
    const  { data: token } = useGetAccountTokenQuery()
    const { refetch } = useGetResortCommentsQuery(thisResort)

    const handleStarClick = (rating) => {
      setSelectedRating(rating);
    }

    const handleCommentChange = e => setComment(e.target.value)

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {}
        data.rating = selectedRating;
        data.comment = comment;
        data.user_id = token?.account.id;
        data.resort_id = thisResort
        const commentUrl = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/resorts/${thisResort}/comments`
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token.access_token}`
            }
        };
        const response = await fetch(commentUrl, fetchConfig);
        if (response.ok) {
            setSelectedRating(0);
            setRating('');
            setComment('');
            refetch();
            alert("Created new comment!")
        } else {
            alert("Failed to create new comment :(")
        }
    };

    const validateRating = (value) => {
        const intValue = parseInt(value, 10)
        if ( intValue < 1 || intValue > 5) {
            alert('Please enter a rating value between 1 and 5.')
            setRating('')
        } else {
            setRating(value)
            setSelectedRating(intValue)
        }
    }

    const renderStars = () => {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
          const style = {
              color: i <= selectedRating ? 'gold' : 'gray'
          }
          stars.push(
              <span
                  key={i}
                  onClick={() => handleStarClick(i)}
                  style={style}
              >
                  &#9733;
              </span>
            )
        }
        return stars;
    }

    return (
      <section>
        <br/>
        <h2 className="underlined">Post a Comment</h2>
        <form>
          <label htmlFor="commentRating">Rating:&nbsp;&nbsp;</label>
          <StarRating
            selectedRating={selectedRating}
            handleStarClick={handleStarClick}
          />
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
          <button
            type="button"
            className="butt btn-sm btn-primary"
            onClick={handleSubmit}
          >
            Post
          </button>
        </form>
      </section>
    );

}
