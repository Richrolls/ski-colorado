import { NavLink } from "react-router-dom";
import { useLogoutMutation, useGetAccountQuery } from "../login/auth";
import { useNavigate } from "react-router-dom";
import NavbarFavoriteList from "../favorites/NavbarFavoriteList";

function NavLoggedIn() {
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const { data } = useGetAccountQuery();

  const handleLogout = async (e) => {
    e.preventDefault();
    const result = logout();

    if (result) {
      navigate("/");
    }
  };

  return (
    <nav className="navbar navbar-expand-s navbar-dark bg-gradient">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/home">
          <div className="snow">SC</div>
        </NavLink>
        <div className="dropdown">
          <button
            className="butt btn-sm btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites&nbsp;&nbsp;
          </button>
          <div
            className="dropdown-menu dropdown-menu-center"
            aria-labelledby="dropdownMenuButton"
          >
            <NavbarFavoriteList />
          </div>
        </div>
        <div>
          {data && (
            <NavLink className="navbar-misc" to={`/profile/${data.id}`}>
              <img
                className="profile-icon rounded-circle"
                alt="profile"
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
