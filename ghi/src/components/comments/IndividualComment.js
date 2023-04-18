import React from "react";

const IndividualComment = ({ comment, resort_id }) => {
  return (
    <div>
      <div className="bg-secondary bg-opacity-50 bg-gradient white-border">
        <a href={`http://localhost:3000/resorts/${resort_id}/comments`}>{comment}</a>
      </div>
      <br />
    </div>
  );
};

export default IndividualComment;
