import Footer from "../footer/Footer.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import NavLoggedOut from "../header/NavLoggedOut.js";

function MainPage() {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate("/signup");
  };

  return (
    <>
      <NavLoggedOut />
      <>
        <br></br>
        <br></br>
        <h1 className="snow">SkiColorado</h1>
        <h2>
          The ultimate community of Colorado ski and snowboard enthusiasts!
        </h2>
        <div>
          <h3>
            Already have an account?&nbsp;&nbsp;
            <Link to="/login" className="link-warning">
              Click here!
            </Link>
          </h3>
        </div>
        <br />
        <h3>
          <button className="butt btn-primary" onClick={handleJoinClick}>
            Join Now!
          </button>
        </h3>
        <br />
        <Footer />
      </>
    </>
  );
}

export default MainPage;
