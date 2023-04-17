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
        className="form-check-input"
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
      <div className="Page text-center">
        <div className="col">
          <div className="row row-cols-2">
            <div className="border w-25 p-3">
              <div className="border">Filters</div>
              <div className="border">
                <div> Pass </div>
                <Checkbox name="epic" label="Epic" />
                <Checkbox name="ikon" label="Ikon" />
              </div>
              <div className="border">
                <div>Price</div>
                <Checkbox name="$" label="$" />
                <Checkbox name="$$" label="$$" />
                <Checkbox name="$$$" label="$$$" />
                <Checkbox name="$$$$" label="$$$$" />
                <Checkbox name="$$$$$" label="$$$$$" />
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

            <div className="border w-75 p-3">
              <div className="border">
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
