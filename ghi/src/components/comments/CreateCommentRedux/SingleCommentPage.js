import React from 'react'
import { useSelector } from 'react-redux'

export const SingleCommentPage = ({ match }) => {
    const { commentId } = match.params

    const comment = useSelector(state =>
        state.comments.find(comment => comment.id ===commentId)
        )
    if (!comment) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }
  return (
    <section>
      <article className="comment">
        <h2>Comment</h2>
        <p className="comment-rating">{comment.rating}</p>
        <p className="comment-content">{comment.comment}</p>
      </article>
    </section>
  )
}
