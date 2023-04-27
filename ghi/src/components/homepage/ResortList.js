import React, { useEffect, useState } from "react";
import { useGetResortsQuery } from "../login/auth";
import { Link } from "react-router-dom";

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
            <div className="row mx-auto w-75" style={{ paddingTop: 8 }}>
              {filteredResorts
                ?.sort((a, b) => a.name.localeCompare(b.name))
                .map((resort) => (
                  <div key={resort.id}>
                    <div className="card bg-secondary bg-opacity-50 bg-gradient white-border">
                      <div>
                        <h3>
                          <Link to={`/resorts/${resort.id}`}>
                            {resort.name}
                          </Link>
                        </h3>
                        <h4>
                          {resort.pass_type} Pass,{" "}
                          {getDollarString(resort.price)}
                        </h4>
                      </div>
                    </div>
                    <br />
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
