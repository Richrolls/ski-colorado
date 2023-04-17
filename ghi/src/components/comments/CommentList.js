// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import NavLoggedIn from "../header/NavLoggedIn.js"
// import { Link } from 'react-router-dom';
// import { useGetCommentsQuery } from "../../app/commentsApi.js";

// function CommentList( {resortId }) {
//     const { data, error, isLoading } = useGetCommentsQuery(resortId);
//     console.log(data)

//     if (isLoading) {
//         return (
//             <progress className="progress is-primary" max="100"></progress>
//         )
//     }

//     return (
//         <>
//             <div>
//             {comments.map(comment => (
//                 <div key={comment.id}>
//                 <p>Rating: {comment.rating}</p>
//                 <p>Comment: {comment.comment}</p>
//                 <p>User ID: {comment.user_id}</p>
//                 <p>Resort ID: {comment.resort_id}</p>
//                 </div>
//             ))}
//     </div>
//         </>
//     );

// }
// export default CommentList;
