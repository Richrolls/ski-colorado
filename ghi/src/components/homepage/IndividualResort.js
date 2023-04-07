import React from "react";

const IndividualResort = ({ name, id }) => {
  return (
    <tr>
        <td>
            <a href={`http://localhost:3000/resorts/${id}`}>
            {name}
            </a>
        </td>
    </tr>
  );
};

export default IndividualResort;
