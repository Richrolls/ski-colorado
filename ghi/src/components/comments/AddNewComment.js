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
        <h2>Add a New Comment</h2>
        <form>
            <label htmlFor="commentRating">Rating:</label>
            <input
            type="text"
            id="commentRating"
            name="commentRating"
            value={rating}
            style={{ backgroundColor: 'black' }}
            onChange={(e) => validateRating(e.target.value)}
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
