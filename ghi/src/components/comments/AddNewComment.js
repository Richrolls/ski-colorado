import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGetResortQuery, useGetAccountTokenQuery } from '../login/auth'


export const NewCommentForm = () => {
    const [rating, setRating]  = useState(0)
    const [comment, setComment] = useState('')
    const { thisResort } = useParams();
    const  { data: token } = useGetAccountTokenQuery()

    const handleRatingChange = e => setRating(e.target.value)
    const handleCommentChange = e => setComment(e.target.value)

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {}
        data.rating = rating;
        data.comment = comment;
        data.user_id = token.account.id;
        data.resort_id = thisResort
        console.log(data)
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
            setRating(0);
            setComment("");
            window.location.reload();
            alert("Created new comment!")
        } else {
            alert("Failed to create new comment :(")
        }
    };

    return (
        <section>
        <h2>Add a New Comment</h2>
        <form>
            <label htmlFor="commentRating">Rating:</label>
            <input
            type="number"
            id="commentRating"
            name="commentRating"
            value={rating}
            style={{ backgroundColor: 'black' }}
            onChange={handleRatingChange}
            />
            <label htmlFor="commentContent">Content:</label>
            <textarea
            id="commentContent"
            name="commentContent"
            value={comment}
            onChange={handleCommentChange}
            />
            <button type="button" onClick={handleSubmit}>Save Comment</button>
        </form>
        </section>
  )

}
