import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Construct from "./Construct.js";
import ErrorNotification from "./ErrorNotification";
import Nav from "./Nav";
import MainPage from "./MainPage.js";
import SignupForm from "./SignupForm.js";
import LoginForm from "./LoginForm.js";
import Home from "./components/Home.js";
import "./App.css";

function App() {
  const [launch_info, setLaunchInfo] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      let url = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/launch-details`;
      //console.log("fastapi url: ", url);
      let response = await fetch(url);
      //console.log("------- hello? -------");
      let data = await response.json();

      if (response.ok) {
        //console.log("got launch data!");
        setLaunchInfo(data.launch_details);
      } else {
        //console.log("drat! something happened");
        setError(data.message);
      }
    }
    getData();
  }, []);

  return (
    // <div>
    //   {/* <ErrorNotification error={error} />
    //   <Construct info={launch_info} /> */}

    // </div>
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
