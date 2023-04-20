import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGetAccountTokenQuery } from '../login/auth'



export const NewCommentForm = () => {
    const [rating, setRating]  = useState(0)
    const [comment, setComment] = useState('')
    const { thisResort } = useParams();
    const  { data: token } = useGetAccountTokenQuery()
    console.log(typeof thisResort)



    const handleRatingChange = e => setRating(e.target.value)
    const handleCommentChange = e => setComment(e.target.value)

    // const getUser = async () => {
    //     const userUrl = "http://localhost:8000/api/accounts/"
    //     const response = await fetch(userUrl);
    //     if (response.ok) {
    //         const data = await response.json();
    //         setUserId(data.accounts.id)
    //     }
    // }

    // const getResort = async () => {
    // const resortUrl = "http://localhost:8000/api/resorts/"
    // const response = await fetch(resortUrl);
    // if (response.ok) {
    //     const data = await response.json();
    //     setResortId(data.resorts.id)
    // }
    // }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = []
        data.rating = rating;
        data.comment = comment;
        data.user_id = token.account.id;
        data.resort_id = thisResort
        const commentUrl = `http://localhost:8000/api/resorts/${thisResort}/comments`
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
            // setUserId("");
            // setResortId("");
            alert("Created new comment!")
        } else {
            alert("Failed to create new comment :(")
        }
    };

    // useEffect(() => {
    //     getUser();
    //     getResort()
    // }, []);

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
