import Footer from "./Footer.js";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate("/signup");
  };

  return (
    <>
      <br></br>
      <br></br>
      <h1 className="snow">SkiColorado</h1>
      <h2>The ultimate community of Colorado ski and snowboard enthusiasts!</h2>
      {/* <h3>View current conditions, explore new mountains, and so much more!</h3> */}
      <div>
        <h3>
          Already have an account?&nbsp;&nbsp;
          <a href="#" class="link-warning">
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
  );
}

export default MainPage;
