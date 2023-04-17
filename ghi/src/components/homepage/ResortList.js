import React from "react";
import { useGetResortsQuery } from "../login/auth";
import IndividualResort from "./IndividualResort";

const ResortList = () => {
  const { data } = useGetResortsQuery();

  return (
    <table className="table table-striped shadow" style={{ borderRadius: 16 }}>
      <thead className="bg-primary bg-gradient">
        <tr>
          <th>
            <h1 className="snow">Resorts</h1>
          </th>
        </tr>
      </thead>
      <tbody>
        {data?.map((resort) => (
          <IndividualResort key={resort.id} {...resort} />
        ))}
      </tbody>
    </table>
  );
};

export default ResortList;
