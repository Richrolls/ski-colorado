import React, { useEffect, useState } from "react";

const ResortList = () => {
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
    <table className="table table-striped shadow" style={{ borderRadius: 16 }}>
      <thead className="bg-primary bg-gradient">
        <tr>
          <th>
            <h1 className="snow">Resorts</h1>
          </th>
        </tr>
      </thead>
      <tbody className="bg-primary bg-gradient">
        {resort &&
          resort.map((resorts) => {
            return (
              <tr key={resorts.id}>
                <td className="bg-secondary bg-opacity-50 bg-gradient">
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
