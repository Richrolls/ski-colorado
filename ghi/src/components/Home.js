import { NavLink } from "react-router-dom";

const HomePage = () => {
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
                    htmltype="checkbox"
                    value="1"
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Epic
                  </label>
                </div>
                <div>
                  <input
                    className="form-check-input"
                    htmltype="checkbox"
                    value="2"
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Ikon
                  </label>
                </div>
              </div>
              <div className="border">Price</div>
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
};

export default HomePage;
