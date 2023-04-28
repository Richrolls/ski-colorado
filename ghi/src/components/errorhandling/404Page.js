import React from "react";
import { Link } from "react-router-dom";
import ErrorPic from "./ErrorPic.jpg";
import { useGetAccountQuery } from "../login/auth";

const NotFound = () => {
  const { data: account } = useGetAccountQuery();

  if (account) {
    return (
      <div>
        <h5>
          &nbsp;
          <br />
          <br />
        </h5>
        <div className="container">
          <div className="row">
            <div className="offset-3 col-6">
              <div
                className="shadow p-4 mt-4 bg-primary bg-gradient text-center"
                style={{ borderRadius: 8 }}
              >
                <h1 className="snow">Error 404</h1>
                <h2>The page you requested could not be found.</h2>
                <br />
                <div>
                  <img className="resort-photo rounded" src={ErrorPic}></img>
                </div>
                <br />
                <h3>
                  <Link to="/home" className="link-warning">
                    Click here to return to the homepage.
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h5>
          &nbsp;
          <br />
          <br />
        </h5>
        <div className="container">
          <div className="row">
            <div className="offset-3 col-6">
              <div
                className="shadow p-4 mt-4 bg-primary bg-gradient text-center"
                style={{ borderRadius: 8 }}
              >
                <h1 className="snow">Error 404</h1>
                <h2>The page you requested could not be found.</h2>
                <br />
                <div>
                  <img className="resort-photo rounded" src={ErrorPic}></img>
                </div>
                <br />
                <h3>
                  <Link to="/" className="link-warning">
                    Click here to return to the homepage.
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default NotFound;
