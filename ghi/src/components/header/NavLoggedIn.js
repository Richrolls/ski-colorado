import { NavLink, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLogoutMutation, useGetAccountQuery } from "../login/auth";
import { useNavigate } from "react-router-dom";
import skierIcon from "./Skier_Icon.png";
import NavbarFavoriteList from "../favorites/NavbarFavoriteList";

function NavLoggedIn() {
  const dispatch = useDispatch();
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const { data } = useGetAccountQuery();

  const handleLogout = (e) => {
    e.preventDefault();
    const result = logout();

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
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <NavbarFavoriteList />
          </ul>
        </div>
        <div>
          {data && (
            <NavLink className="navbar-misc" to={`/profile/${data.id}`}>
              <img
                className="profile-icon rounded-circle"
                src={data.picture_url}
              />
            </NavLink>
          )}
          &nbsp;&nbsp;
          <NavLink className="navbar-misc" onClick={(e) => handleLogout(e)}>
            Log Out
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavLoggedIn;
