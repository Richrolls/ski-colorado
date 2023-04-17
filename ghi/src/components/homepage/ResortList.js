import React, { useEffect, useState } from "react";

const ResortList = () => {
  const [resort, setResortData] = useState([]);

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
        {resort &&
          resort.map((resorts) => {
            return (
              <tr key={resorts.id}>
                <td>
                  <a href={`http://localhost:3000/resorts/${resorts.id}`}>
                    {resorts.name}
                  </a>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default ResortList;
