import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Construct from "./Construct.js";
import ErrorNotification from "./components/errorhandling/ErrorNotification"
import MainPage from "./components/mainpage/MainPage.js";
import Signup from "./components/signup/Signup.jsx";
import ResortDetail from "./components/resort/ResortDetail.js";
import LoginForm from "./components/login/LoginForm.js";
import Home from "./components/homepage/Home.js";
import "./App.css";
import CommentList from "./components/resort/CommentList.js";


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
    <>
      <BrowserRouter>
        {/* <div className="container"> */}
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/resorts/:thisResort" element={<ResortDetail />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="signup" element={<Signup />} />
            <Route path="home" element={<Home />} />
            <Route path="/comments" element={<CommentList />} />
          </Routes>
        {/* </div> */}
      </BrowserRouter>
    </>
  );
}

export default App;
