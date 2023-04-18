import { NavLink } from "react-router-dom";

function NavLoggedOut() {
  return (
    <nav className="navbar navbar-expand-s navbar-dark bg-gradient">
      <div className="container-fluid">
        <div className="snow">
          <NavLink className="navbar-brand" to="/">
            SC
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavLoggedOut;
