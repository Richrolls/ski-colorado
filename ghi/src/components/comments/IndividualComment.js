import React from "react";
import { Link } from "react-router-dom";

const IndividualComment = ({ comment, resort_id }) => {
  return (
    <div>
      <div className="bg-secondary bg-opacity-50 bg-gradient white-border">
        <Link to={`/resorts/${resort_id}/comments`}>{comment}</Link>
      </div>
      <br />
    </div>
  );
};

export default IndividualComment;
