import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGetCommentsQuery, useGetAccountTokenQuery } from '../login/auth'


export const NewCommentForm = () => {
    const [rating, setRating]  = useState('')
    const [comment, setComment] = useState('')
    const { thisResort } = useParams();
    const  { data: token } = useGetAccountTokenQuery()
    const { refetch } = useGetCommentsQuery(thisResort)

    const handleRatingChange = e => setRating(e.target.value)
    const handleCommentChange = e => setComment(e.target.value)

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {}
        data.rating = parseInt(rating, 10); // convert to integer
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
        }
    }

    return (
      <section>
        <br/>
        <h2 className="underlined">Post a Comment</h2>
        <form>
          <label htmlFor="commentRating">Rating:&nbsp;&nbsp;</label>
          <input
            type="text"
            id="commentRating"
            name="commentRating"
            value={rating}
            style={{ width: "10%" }}
            onChange={(e) => validateRating(e.target.value)}
            className="mx-auto bg-secondary bg-opacity-50 bg-gradient white-border"
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
