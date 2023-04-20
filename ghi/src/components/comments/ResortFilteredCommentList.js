import { useNavigate, useParams } from "react-router-dom";
import { useGetCommentsQuery } from "../login/auth.js";
import IndividualComment from "./IndividualComment.js";

export default function ResortFilteredCommentList() {
  const { thisResort } = useParams();
  const { data, error, isLoading } = useGetCommentsQuery(thisResort);

  if (isLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }

  const filteredComments = data.comments.filter(
    (comment) => comment.resort_id === thisResort
  );

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
