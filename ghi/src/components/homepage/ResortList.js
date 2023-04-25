import React, { useEffect, useState } from "react";
import { useGetResortsQuery } from "../login/auth";

const ResortList = ({ filters }) => {
  const { data: resorts } = useGetResortsQuery();
  const [filteredResorts, setFilteredResorts] = useState([]);

  useEffect(() => {
    if (resorts && resorts.length > 0) {
      const tempFilteredResorts = resorts.filter((resort) => {
        return (
          (filters.epic && resort.pass_type === "Epic") ||
          (filters.ikon && resort.pass_type === "Ikon")
        ) && (
          (filters.$ && resort.price === 1) ||
          (filters.$$ && resort.price === 2) ||
          (filters.$$$ && resort.price === 3) ||
          (filters.$$$$ && resort.price === 4) ||
          (filters.$$$$$ && resort.price === 5)
        );
      });
      setFilteredResorts(tempFilteredResorts);
    }

  }, [filters, resorts]);

    const getDollarString = (price) => {
    return "$".repeat(price);
  }



  return (
    <div className="container">
      <div className="row">
        <div>
          <div
            className="center shadow p-4 mt-4 bg-primary bg-gradient"
            style={{ borderRadius: 8 }}
          >
            <div>
              <h1 className="snow">Resorts</h1>
            </div>
            <br />
            <div className="row mx-auto w-75">
              {filteredResorts
                ?.sort((a, b) => a.name.localeCompare(b.name))
                .map((resort) => (
                  <div className="col-4 mb-3" key={resort.id}>
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{resort.name}</h5>
                        <p className="card-text">
                          {resort.pass_type} Pass, {getDollarString(resort.price)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResortList;
