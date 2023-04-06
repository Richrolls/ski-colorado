import Footer from "../footer/Footer.js";
import { useNavigate} from "react-router-dom"

function MainPage() {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate("/signup")
  }

  return (
    <>

      <br></br>
      <br></br>
      <h1 className="snow">SkiColorado</h1>
      <h2>The ultimate community of Colorado ski and snowboard enthusiasts!</h2>
      <h3>View current conditions, explore new mountains, and so much more!</h3>
      <br />
      <h3>
        <button className="butt btn-primary" onClick={handleJoinClick}>Join Now!</button>
      </h3>
      <Footer />
    </>
  );
}

export default MainPage;
