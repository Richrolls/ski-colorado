import * as React from "react";
import ReactDOM from "react-dom/client";
import Snowfall from "react-snowfall";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { store } from "./app/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
    <div
      style={{
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        position: "fixed",
        pointerEvents: "none",
      }}
    >
      <Snowfall snowflakeCount={300} />
    </div>
  </Provider>
);

reportWebVitals();
