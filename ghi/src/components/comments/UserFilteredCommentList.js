import { useGetCommentsQuery, useGetResortsQuery } from "../login/auth.js";
import {useParams, Link } from "react-router-dom"
import IndividualComment from "./IndividualComment.js";
import ResortList from "../homepage/ResortList.js";

const UserFilteredCommentList = () => {
  const { data, isLoading } = useGetCommentsQuery('');
  const { data: resorts, isLoading: isResortsLoading } = useGetResortsQuery()
  const {accountId} = useParams()

  if (isLoading || isResortsLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }

  const filteredComments = data.comments.filter(
    (comment) => comment.user_id === accountId
  )


  const commentsWithResorts = filteredComments.map(comment => {
    const resort = resorts.find(resort => resort.id === comment.resort_id);
    return {
      ...comment,
      resortName: resort ? resort.name : 'Unknown resort',
    }
  })
  console.log(commentsWithResorts)


return (
    <>
      <div className="container">
        <div className="row">
          <div>
            <div style={{ borderRadius: 8, marginLeft: 0 }}>
              <div>
                <h2 className="underlined">Comments</h2>
              </div>
              <br />
              <div className="row mx-auto w-75">
                {commentsWithResorts.map((comment) => (
                  <div key={comment.id}>
                    <p>Resort: <Link to={`/resorts/${comment.resort_id}`}>{comment.resortName}</Link></p>
                    <p>Rating: {comment.rating}</p>
                    <p>Comment: {comment.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserFilteredCommentList;


