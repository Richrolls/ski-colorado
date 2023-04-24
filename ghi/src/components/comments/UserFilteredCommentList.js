import { useGetCommentsQuery } from "../login/auth.js";
import {useParams} from "react-router-dom"
import IndividualComment from "./IndividualComment.js";

const UserFilteredCommentList = () => {
  const { data, isLoading } = useGetCommentsQuery('');
  const {accountId} = useParams()
  console.log(data)


  if (isLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }

  const filteredComments = data.comments.filter(
    (comment) => comment.user_id === accountId
  )
  console.log(filteredComments)

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
                {filteredComments.map((comment) => (
                    <IndividualComment key={comment.id} {...comment} />
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
