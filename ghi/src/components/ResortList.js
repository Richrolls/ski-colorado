import React, { useEffect, useState } from "react";

const ResortList = () => {
  const [resort, setResortData] = useState([]);

  const getData = async () => {
    const response = await fetch("http://localhost:8000/api/resorts");
    if (response.ok) {
      const data = await response.json();
      console.log(data)
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
                resort.map((resorts) => {
                    return (
                      <tr key={resorts.id}>
                        <td>
                          <a
                            href={`http://localhost:3000/resorts/${resorts.id}`}
                          >
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


