import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLogoutMutation } from "../login/auth";
import { useNavigate } from "react-router-dom";
import skierIcon from "./Skier_Icon.png"

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
        <div>
          <NavLink className="navbar-misc" to="/profile">
            <img className="profile-icon" src={skierIcon} />
          </NavLink>
          &nbsp;&nbsp;
          <NavLink
            className="navbar-misc"
            onClick={(e) => dispatch(handleLogout(e))}
          >
            Log Out
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavLoggedIn;
