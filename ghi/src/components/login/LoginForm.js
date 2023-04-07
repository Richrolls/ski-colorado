import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  handlePasswordChange,
  handleUsernameChange,
  reset,
} from "./loginSlice";
import { useLoginMutation } from "./auth";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const { fields } = useSelector((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    console.log({ fields });
    login(fields);
    dispatch(reset());

    const result = await login(fields).unwrap();
    console.log(result);
    if (result.access_token) {
      navigate("/home");
    } else {
      alert(
        "Incorrect username or password, please try again you fat-fingered fool"
      );
    }
  };

  return (
    <>
      <h5>
        &nbsp;
        <br />
        <br />
      </h5>
      <div className="container">
        <div className="row">
          <div className="offset-3 col-6">
            <div
              className="shadow p-4 mt-4 bg-primary bg-gradient"
              style={{ borderRadius: 8 }}
            >
              <h1 class="snow">Login</h1>
              <form onSubmit={handleSubmit} id="login-form">
                <center>
                  <div className="from-outline w-75 mb-3">
                    <input
                      value={fields.username}
                      placeholder="Username"
                      type={`text`}
                      id="username"
                      className="form-control bg-secondary bg-opacity-50 bg-gradient"
                      onChange={(e) =>
                        dispatch(handleUsernameChange(e.target.value))
                      }
                    />
                  </div>
                </center>
                <center>
                  <div className="from-outline w-75 mb-3">
                    <input
                      value={fields.password}
                      placeholder="Password"
                      type={`password`}
                      id="password"
                      className="form-control bg-secondary bg-opacity-50 bg-gradientl"
                      onChange={(e) =>
                        dispatch(handlePasswordChange(e.target.value))
                      }
                    />
                  </div>
                </center>
                <div class="button-box col d-flex justify-content-center">
                  <button className="butt btn-lg btn-primary">Log in</button>
                </div>
              </form>
              <div>
                <br />
                <h3>
                  Don't have an account?&nbsp;&nbsp;
                  <a href="#" class="link-warning">
                    Click here!
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
