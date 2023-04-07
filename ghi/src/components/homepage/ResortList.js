import React from "react";
import { useGetResortsQuery } from "../login/auth";
import IndividualResort from "./IndividualResort";


const ResortList = () => {
  const { data } = useGetResortsQuery();

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>
            <h2>Resort Name</h2>
          </th>
        </tr>
      </thead>
      <tbody>
        {data?.map(resort => <IndividualResort key={resort.id} {...resort} />)}
      </tbody>
    </table>
  );
};

export default ResortList;
