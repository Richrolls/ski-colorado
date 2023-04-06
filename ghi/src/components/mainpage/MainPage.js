import Footer from "../footer/Footer.js";
import { useNavigate } from "react-router-dom";
import NavLoggedOut from "../header/NavLoggedOut.js";
import { useDispatch } from "react-redux";

function MainPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate("/signup");
  };

  const handleLoginClick = (e) => {
    navigate("/login");
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
        {/* <h3>View current conditions, explore new mountains, and so much more!</h3> */}
        <div>
          <h3>
            Already have an account?&nbsp;&nbsp;
            <a
              href="#"
              class="link-warning"
              onClick={(e) => dispatch(handleLoginClick(e.target.value))}
            >
              Click here!
            </a>
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
