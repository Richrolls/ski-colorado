import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/mainpage/MainPage.js";
import Signup from "./components/signup/Signup.jsx";
import ResortDetail from "./components/resort/ResortDetail.js";
import LoginForm from "./components/login/LoginForm.js";
import Home from "./components/homepage/Home.js";
import Profile from "./components/profile/profile.jsx";
import NotFound from "./components/errorhandling/404Page.js";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/ski-colorado/" element={<MainPage />} />
          <Route path="/resorts/:thisResort" element={<ResortDetail />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="signup" element={<Signup />} />
          <Route path="home" element={<Home />} />
          <Route path="profile/:accountId" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
