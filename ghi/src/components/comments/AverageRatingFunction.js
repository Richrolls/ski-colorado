import { useParams } from "react-router-dom";
import { useGetCommentsQuery } from "../login/auth.js";

export default function AverageRatingByResort() {
  const { thisResort } = useParams();
  const { data, isLoading } = useGetCommentsQuery(thisResort);

  if (isLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }

  const filteredComments = data.comments.filter(
    (comment) => comment.resort_id === thisResort
  );
  function averageRating(filteredComments) {
    const sum = filteredComments.reduce(
      (total, comment) => total + comment.rating,
      0
    );
    const average = sum / filteredComments.length;
    return parseFloat(average.toFixed(2));
  }

  return (
    <>
      <div>
        <h2 className="underlined">Community Rating</h2>
      </div>
      <br />
      <h3 className="">{averageRating(filteredComments)} / 5.0</h3>
    </>
  );
}
