import { useNavigate, useParams } from "react-router-dom";
import { useGetCommentsQuery } from "../login/auth.js";
import IndividualComment from "./IndividualComment.js";




export default function UserFilteredCommentList() {
  const { data, isLoading } = useGetCommentsQuery('');
  console.log(data)


  if (isLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }



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
                {/* <CommentList/> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
