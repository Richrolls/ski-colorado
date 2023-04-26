import { useGetUserCommentsQuery, useGetResortsQuery } from "../login/auth.js";
import {useParams, Link } from "react-router-dom"
import ResortList from "../homepage/ResortList.js";

const UserCommentList = () => {
  const { accountId } = useParams()
  const { data: commentsData, isLoading: isCommentsLoading } = useGetUserCommentsQuery( accountId );
  const { data: resorts, isLoading: isResortsLoading } = useGetResortsQuery()


  if (isCommentsLoading || isResortsLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }

  console.log(commentsData)
  console.log(resorts)

  const commentsWithResorts = commentsData.comments.map(comment => {
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
                    <p>Comment: {comment.comment} {comment.rating}/5</p>
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

export default UserCommentList;
