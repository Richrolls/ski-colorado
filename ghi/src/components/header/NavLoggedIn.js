import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLogoutMutation } from "../login/auth";
import { useNavigate } from "react-router-dom";

function NavLoggedIn() {
  const dispatch = useDispatch();
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    const result = await logout();

    if (result) {
      navigate("/");
    }
  };

  return (
    <nav className="navbar navbar-expand-s navbar-dark bg-gradient">
      <div className="container-fluid">
        <div className="snow">
          <NavLink className="navbar-brand" to="/home">
            SC
          </NavLink>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="snow">
          <NavLink className="navbar-brand" to="/profile">
            *ProfileLinkImage*
          </NavLink>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="snow">
          <NavLink
            className="navbar-brand"
            onClick={(e) => dispatch(handleLogout(e))}
          >
            Logout
          </NavLink>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <ul></ul>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavLoggedIn;
