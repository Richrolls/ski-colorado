import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useGetCommentsQuery } from "../login/auth.js";
import IndividualComment from "./IndividualComment.js";

export default function CommentList() {
    const { thisResort } = useParams();
    const { data, error, isLoading } = useGetCommentsQuery(thisResort);
    console.log(data)

    if (isLoading) {
        return (
            <progress className="progress is-primary" max="100"></progress>
        )
    }

    return (
        <>
    <div className="container">
      <div className="row">
        <div>
          <div
            className="shadow p-4 mt-4 bg-primary bg-gradient"
            style={{ borderRadius: 8, marginLeft: 0, }}
          >
            <div>
              <h1 className="snow">Comments</h1>
            </div>
            <br/>
            <div className="row mx-auto w-75">
              {data.comments?.map((comment) => (
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
