import React, { useState } from "react";
import { Link } from "react-router-dom";
import ResortList from "./ResortList.js";
import NavLoggedIn from "../header/NavLoggedIn.js";
import { Timeline } from "react-twitter-widgets";
import { useGetAccountQuery } from "../login/auth";
import Closed from "./Closed.png";

function Checkbox(props) {
  const { name, label, setFilters, isChecked } = props;
  const handleChange = (e) => {
    setFilters((previousFilters) => ({
      ...previousFilters,
      [e.target.name]: !previousFilters[e.target.name],
    }));
  };

  return (
    <div>
      <input
        checked={isChecked}
        onChange={handleChange}
        className="bg-secondary bg-opacity-50"
        type="checkbox"
        name={name}
        id={`inlineCheckbox-${name}`}
      />
      <label className="form-check-label" htmlFor={`inlineCheckbox-${name}`}>
        {label}
      </label>
    </div>
  );
}

function HomePage() {
  const { data: account } = useGetAccountQuery();
  const [filters, setFilters] = useState({
    epic: true,
    ikon: true,
    $: true,
    $$: true,
    $$$: true,
    $$$$: true,
    $$$$$: true,
  });

  if (account) {
    return (
      <>
        <NavLoggedIn />
        <div className="text-center">
          <div className="col">
            <div className="row row-cols-3">
              <div
                className="shadow p-4 mt-4 bg-primary bg-gradient"
                style={{
                  borderRadius: 8,
                  height: 560,
                  width: "20%",
                  marginLeft: 52,
                }}
              >
                <h2 style={{ paddingBottom: 14 }}>Filters</h2>
                <div
                  className="mx-auto w-50 bg-secondary bg-opacity-50 bg-gradient white-border"
                  style={{ paddingTop: 20 }}
                >
                  <h3>Pass</h3>
                  <Checkbox
                    isChecked={filters.epic}
                    setFilters={setFilters}
                    name="epic"
                    label="&nbsp;Epic"
                  />
                  <Checkbox
                    isChecked={filters.ikon}
                    setFilters={setFilters}
                    name="ikon"
                    label="&nbsp;Ikon"
                  />
                </div>
                <br />
                <div
                  className="mx-auto w-50 bg-secondary bg-opacity-50 bg-gradient white-border"
                  style={{ paddingTop: 20 }}
                >
                  <h3>Price</h3>
                  <Checkbox
                    setFilters={setFilters}
                    isChecked={filters.$}
                    name="$"
                    label="&nbsp;$"
                  />
                  <Checkbox
                    setFilters={setFilters}
                    isChecked={filters.$$}
                    name="$$"
                    label="&nbsp;$$"
                  />
                  <Checkbox
                    setFilters={setFilters}
                    isChecked={filters.$$$}
                    name="$$$"
                    label="&nbsp;$$$"
                  />
                  <Checkbox
                    setFilters={setFilters}
                    isChecked={filters.$$$$}
                    name="$$$$"
                    label="&nbsp;$$$$"
                  />
                  <Checkbox
                    setFilters={setFilters}
                    isChecked={filters.$$$$$}
                    name="$$$$$"
                    label="&nbsp;$$$$$"
                  />
                </div>
                <br />
                <div
                  className="shadow p-4 mt-4 bg-primary bg-gradient"
                  style={{
                    borderRadius: 8,
                    left: 0,
                    height: 300,
                    width: "100%",
                  }}
                >
                  <iframe
                    title="Resorts"
                    width="100%"
                    height="250"
                    src="https://embed.windy.com/embed2.html?lat=38.840&lon=-105.381&detailLat=30.175&detailLon=-97.820&width=650&height=450&zoom=6&level=surface&overlay=radar&product=radar&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1"
                    frameBorder="0"
                  ></iframe>
                </div>
              </div>
              <div>
                <div>
                  <ResortList filters={filters} />
                </div>
              </div>
              <div>
                <div
                  className="right shadow p-4 mt-4 bg-primary bg-gradient"
                  style={{
                    borderRadius: 8,
                    marginRight: 0,
                    marginLeft: 52,
                    height: 875,
                    width: "30%",
                  }}
                >
                  <div>
                    <Timeline
                      dataSource={{
                        sourceType: "profile",
                        screenName: "ColoradoDOT",
                      }}
                      options={{
                        height: "825",
                        width: "100%",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
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
                <h1 className="snow">Unauthorized</h1>
                <h2>Please log in or sign up.</h2>
                <br />
                <div>
                  <img
                    className="resort-photo rounded"
                    alt="error"
                    src={Closed}
                  ></img>
                </div>
                <br />
                <h3>
                  <Link to="/login" className="link-warning">
                    Click here to log in.
                  </Link>
                </h3>
                <br />
                <h3>
                  <Link to="/signup" className="link-warning">
                    Click here to sign up.
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
