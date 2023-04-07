import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function ResortList() {
  const [resort, setResortData] = useState([]);

  const getData = async () => {
    const response = await fetch("http://localhost:8000/api/resorts");
    if (response.ok) {
      const data = await response.json();
      setResortData(data.resorts);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
        {resort &&
          resort.map((resort) => {
            return (
              <tr key={resort.id}>
                <td>
                  <Link to={`/resorts/${resort.id}/comments`}>
                    {resort.name}
                  </Link>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default ResortList;
