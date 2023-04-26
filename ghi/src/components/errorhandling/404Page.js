import React from "react";
import { useNavigate, Link } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const handleHomeClick = (e) => {
    navigate("/");
  };

  return (
    <div>
      <h1>404 Page Not Found</h1>
      <p>We're sorry, the page you requested could not be found.</p>
      <p>
        <Link
          to="/"
          className="link-warning"
          // onClick={(e) => dispatch(handleJoinClick(e.target.value))}
        >
          Clickl here to redirect to home
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
