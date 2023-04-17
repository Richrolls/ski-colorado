import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ResortList from "./ResortList.js";
import NavLoggedIn from "../header/NavLoggedIn.js";
import { Timeline } from "react-twitter-widgets";

function Checkbox(props) {
  const { name, label } = props;
  return (
    <div>
      <input
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
  return (
    <>
      <NavLoggedIn />
      <div className="text-center">
        <div className="col">
          <div className="row row-cols-2">
            <div
              className="shadow p-4 mt-4 bg-primary bg-gradient"
              style={{
                borderRadius: 8,
                height: 570,
                width: "20%",
                marginLeft: 52,
              }}
            >
              <h2 style={{ paddingBottom: 12 }}>Filters</h2>
              <div
                className="mx-auto w-50 bg-secondary bg-opacity-50 bg-gradient white-border"
                style={{ paddingTop: 20 }}
              >
                <h3>Pass</h3>
                <Checkbox name="epic" label="Epic" />
                <Checkbox name="ikon" label="Ikon" />
              </div>
              <br />
              <div
                className="mx-auto w-50 bg-secondary bg-opacity-50 bg-gradient white-border"
                style={{ paddingTop: 20 }}
              >
                <h3>Price</h3>
                <Checkbox name="$" label="$" />
                <Checkbox name="$$" label=" $$" />
                <Checkbox name="$$$" label=" $$$" />
                <Checkbox name="$$$$" label=" $$$$" />
                <Checkbox name="$$$$$" label=" $$$$$" />
              </div>

              <div className="bg-primary bg-gradient container p-3 rounded">
                <div>
                  <Timeline
                    dataSource={{
                      sourceType: "profile",
                      screenName: "ColoradoDOT",
                    }}
                    options={{
                      height: "800",
                      width: "500",
                    }}
                  />
                </div>
              </div>

              <div className="bg-primary bg-gradient container p-3 rounded">
                <div>
                  <Timeline
                    dataSource={{
                      sourceType: "profile",
                      screenName: "ColoradoDOT",
                    }}
                    options={{
                      height: "800",
                      width: "500",
                    }}
                  />
                </div>
              </div>
            </div>
            <div>
              <div>
                <ResortList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;

// <thead className="bg-primary bg-gradient">
//   <tr>
//     <th>
//       <h1 className="snow">Resorts</h1>
