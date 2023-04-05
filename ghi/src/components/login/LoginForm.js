import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  handlePasswordChange,
  handleUsernameChange,
  reset,
} from "./loginSlice";
import { useLoginMutation } from "./auth";

function LoginForm() {
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const { fields } = useSelector((state) => state.login);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    console.log({ fields });
    login(fields);
    dispatch(reset());
  };

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Login</h1>
          <form onSubmit={handleSubmit} id="login-form">
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
}

export default LoginForm;
