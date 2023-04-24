import React from "react";

const IndividualComment = ({ resortName, resort_id }) => {
  return (
    <div>
      <div className="bg-secondary bg-opacity-50 bg-gradient white-border">
        <Link to={`/resorts/${resort_id}`}>
          {resortName}
        </Link>
      </div>
      <br />
    </div>
  );
};

export default IndividualComment;
