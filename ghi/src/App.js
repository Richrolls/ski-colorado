import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import Construct from "./Construct.js";
import ErrorNotification from "./components/errorhandling/ErrorNotification";
import MainPage from "./components/mainpage/MainPage.js";
import Signup from "./components/signup/Signup.jsx";
import ResortDetail from "./components/resort/ResortDetail.js";
import LoginForm from "./components/login/LoginForm.js";
import Home from "./components/homepage/Home.js";
import Profile from "./components/profile/profile.jsx";
import NotFound from "./components/errorhandling/404Page.js";

import "./App.css";

function App() {
  // const [launch_info, setLaunchInfo] = useState([]);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   async function getData() {
  //     let url = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/launch-details`;
  //     let response = await fetch(url);
  //     let data = await response.json();

  //     if (response.ok) {
  //       setLaunchInfo(data.launch_details);
  //     } else {
  //       setError(data.message);
  //     }
  //   }
  //   getData();
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/resorts/:thisResort" element={<ResortDetail />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="signup" element={<Signup />} />
          <Route path="home" element={<Home />} />
          <Route path="profile/:accountId" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
