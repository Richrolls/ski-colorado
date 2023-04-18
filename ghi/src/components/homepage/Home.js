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
          <div className="row row-cols-3">
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
                <Checkbox name="epic" label="&nbsp;Epic" />
                <Checkbox name="ikon" label="&nbsp;Ikon" />
              </div>
              <br />
              <div
                className="mx-auto w-50 bg-secondary bg-opacity-50 bg-gradient white-border"
                style={{ paddingTop: 20 }}
              >
                <h3>Price</h3>
                <Checkbox name="$" label="&nbsp;$" />
                <Checkbox name="$$" label="&nbsp;$$" />
                <Checkbox name="$$$" label="&nbsp;$$$" />
                <Checkbox name="$$$$" label="&nbsp;$$$$" />
                <Checkbox name="$$$$$" label="&nbsp;$$$$$" />
              </div>
            </div>
            <div>
              <div>
                <ResortList />
              </div>
            </div>
            <div>
              <div
                className="right shadow p-4 mt-4 bg-primary bg-gradient"
                style={{
                  borderRadius: 8,
                  marginRight: 0,
                  marginLeft: 52,
                  height: 847,
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
                      height: "800",
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
}

export default HomePage;

// <thead className="bg-primary bg-gradient">
//   <tr>
//     <th>
//       <h1 className="snow">Resorts</h1>
