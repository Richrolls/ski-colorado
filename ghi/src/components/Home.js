import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function HomePage() {
  const [resorts, setResortData] = useState([]);

  const getData = async () => {
    const url = "http://localhost:8000/api/resorts";
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      const resortData = data.resorts;
      setResortData(resortData);
    }
  };

  return (
    <>
      <div className="Page text-center">
        <div className="h-20">
          <h2>Resorts</h2>
        </div>
        <div className="col">
          <div className="row row-cols-2">
            <div className="border w-25 p-3">
              <div className="border">Filters</div>
              <div className="border">
                <div> Pass </div>
                <div>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="epic"
                    id="inlineCheckbox1"
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox1">
                    Epic
                  </label>
                </div>
                <div>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="ikon"
                    id="inlineCheckbox1"
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox1">
                    Ikon
                  </label>
                </div>
              </div>
              <div className="border">
                <div>Price</div>
                <div>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="$"
                    id="inlineCheckbox1"
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox1">
                    $
                  </label>
                </div>
                <div>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="$$"
                    id="inlineCheckbox1"
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox1">
                    $$
                  </label>
                </div>
                <div>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="$$$"
                    id="inlineCheckbox1"
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox1">
                    $$$
                  </label>
                </div>
                <div>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="$$$$"
                    id="inlineCheckbox1"
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox1">
                    $$$$
                  </label>
                </div>
                <div>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="$$$$$"
                    id="inlineCheckbox1"
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox1">
                    $$$$$
                  </label>
                </div>
              </div>
            </div>
            <div className="border w-75 p-3">
              <div className="border">table header text</div>
              <div className="border">resorts list w/ links</div>
              <div className="border">twitter</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
