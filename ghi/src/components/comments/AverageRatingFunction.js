import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useGetCommentsQuery } from "../login/auth.js";
import IndividualComment from "./IndividualComment.js";


export default function AverageRatingByResort() {
    const { thisResort } = useParams();
    const { data, error, isLoading } = useGetCommentsQuery(thisResort);
    console.log(data)

    if (isLoading) {
        return (
            <progress className="progress is-primary" max="100"></progress>
        )
    }

    const filteredComments = data.comments.filter(comment => comment.resort_id === thisResort);

    function averageRating(filteredComments) {
        const sum = filteredComments.reduce((total, comment) => total + comment.rating, 0);
        const average = sum / filteredComments.length;
        return parseFloat(average.toFixed(2))
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
              <h1 className="snow">Average Rating</h1>
            </div>
            <br/>
            <div className="row mx-auto w-75">
              Average Rating: {averageRating(filteredComments)}
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    );

}
