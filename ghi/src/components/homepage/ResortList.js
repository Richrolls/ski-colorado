import React, { useEffect, useState } from "react";

const ResortList = () => {
  const [resort, setResortData] = useState([]);

const ResortList = () => {
  const { data } = useGetResortsQuery();

  return (
<<<<<<< HEAD
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
=======
    <div className="container">
      <div className="row">
        <div>
          <div
            className="shadow p-4 mt-4 bg-primary bg-gradient"
            style={{ borderRadius: 8, marginLeft: 0, }}
          >
            <div>
              <h1 className="snow">Resorts</h1>
            </div>
            <br/>
            <div className="row mx-auto w-75">
              {data?.map((resort) => (
                <IndividualResort key={resort.id} {...resort} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
>>>>>>> main
  );
};

export default ResortList;
