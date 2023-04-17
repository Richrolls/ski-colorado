import React from "react";

const IndividualComment = ({ name, id }) => {
  return (
    <div>
      <div className="bg-secondary bg-opacity-50 bg-gradient white-border">
        <a href={`http://localhost:3000/resorts/${id}/comments`}>{name}</a>
      </div>
      <br />
    </div>
  );
};

export default IndividualComment;
