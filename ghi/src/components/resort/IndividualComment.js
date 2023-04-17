import React from "react";
import { useParams } from "react-router-dom"

const IndividualComment = ({ resort_id }) => {
  return (
    <tr>
        <td>
            <a href={`http://localhost:3000/resorts/${resort_id}/comments`}>
            {/* {comment} */}
            </a>
        </td>
    </tr>
  );
};

export default IndividualComment;
