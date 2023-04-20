import React from 'react'
import { useSelector } from 'react-redux'
import { AddCommentForm } from './CreateCommentRedux/AddNewCommentRedux'
import { NewCommentForm } from './AddNewComment'

export const CommentsList = () => {
  const comments = useSelector(state => state.comments)

  const renderedComments = comments.map(comment => (
    <article className="comment-excerpt" key={comment.id}>
      <h3>{comment.comment}</h3>
      <h3>{comment.rating}</h3>
      {/* <p className="comment-content">{comment.content.substring(0, 100)}</p> */}
    </article>
  ))

  return (
    <>
    <AddCommentForm/>
    <section className="comment-list">
      <h2>Comments</h2>
      {renderedComments}
    </section>
    <NewCommentForm/>
    </>
  )
}
