import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  handlePasswordChange,
  handleUsernameChange,
  error,
  reset,
} from "./loginSlice";
import { useLoginMutation } from "./auth";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const { errorMessage, fields } = useSelector((state) => state.login);
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
    }
    if (!result.access_token) {
      dispatch(
        error(
          "Incorrect username or password, please try again you fat-fingered fool"
        )
      );
      return;
    }
  };

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Login</h1>
          <form onSubmit={handleSubmit} id="login-form">
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            <div className="form-floating mb-3">
              <input
                value={fields.username}
                type={`text`}
                id="username"
                className="form-control"
                onChange={(e) => dispatch(handleUsernameChange(e.target.value))}
              />
              <label htmlFor="username">Username</label>
            </div>
            <div className="form-floating mb-3">
              <input
                value={fields.password}
                type={`password`}
                id="password"
                className="form-control"
                onChange={(e) => dispatch(handlePasswordChange(e.target.value))}
              />
              <label htmlFor="password">Password</label>
            </div>
            <button className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
