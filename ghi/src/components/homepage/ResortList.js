import IndividualResort from "./IndividualResort";
import { useGetResortsQuery } from "../login/auth";
import React, { useEffect, useState } from "react";

const ResortList = ({ filters }) => {
  const { data: resorts } = useGetResortsQuery();
  const [filteredResorts, setFilteredResorts] = useState([]);

  useEffect(() => {
    if (!resorts) {
      return;
    }
    const tempFilteredResorts = resorts.filter((resort) => {
      if (filters.$ && resort.price === 1) {
        return true;
      }
      if (filters.$$ && resort.price === 2) {
        return true;
      }
      if (filters.$$$ && resort.price === 3) {
        return true;
      }
      if (filters.$$$$ && resort.price === 4) {
        return true;
      }
      if (filters.$$$$$ && resort.price === 5) {
        return true;
      }
      if (filters.epic && resort.pass_type === "Epic") {
        return true;
      }
      if (filters.ikon && resort.pass_type === "Ikon") {
        return true;
      }
      return false;
    });
    // console.log("TEST", tempFilteredResorts);
    setFilteredResorts(tempFilteredResorts);
  }, [filters, resorts]);

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
              {filteredResorts?.map((resort) => (
                <IndividualResort key={resort.id} {...resort} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResortList;
