import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { commentAdded } from './userCreateCommentSlice'

export const AddCommentForm = () => {
    const [rating, setRating ] = useState()
    const [comment, setComment] = useState()

    const dispatch = useDispatch()

    const onRatingChanged = e => setRating(e.target.value)
    const onCommentChanged = e => setComment(e.target.value)

    const onSaveCommentClicked = () => {
        if (rating && comment) {
            if (rating >= 0 && rating <= 5) {
            dispatch(
                commentAdded({
                    id: nanoid(),
                    rating,
                    comment
                })
            )

            setRating()
            setComment('')
            } else {
                alert('Rating value must be between 0 and 5 :)')
            }
        }
    }


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
          onChange={onRatingChanged}
        />
        <label htmlFor="commentContent">Content:</label>
        <textarea
          id="commentContent"
          name="commentContent"
          value={comment}
          onChange={onCommentChanged}
        />
        <button type="button" onClick={onSaveCommentClicked}>Save Comment</button>
      </form>
    </section>
  )

}
