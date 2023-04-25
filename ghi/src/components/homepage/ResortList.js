import IndividualResort from "./IndividualResort";
import { useGetResortsQuery } from "../login/auth";
import { Link } from "react-router-dom";


const ResortList = () => {
  const { data } = useGetResortsQuery();
  console.log(data)

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
              {data?.map((resort) => (
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
