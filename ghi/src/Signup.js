import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  handleFirstNameChange,
  handleLastNameChange,
  handleUsernameChange,
  handlePasswordChange,
  handlePasswordConfChange,
  handleEmailChange,
  handleAddress1Change,
  handleAddress2Change,
  handleCityChange,
  handleStateChange,
  handleZipcodeChange,
  handleSkiChange,
  handleSnowboardChange,
  handlePictureUrlChange,
  error,
  reset
} from "./features/auth/signupSlice";
import { useSignupMutation } from "./services/signup";
import ErrorMessage from "./ErrorMessage";

const Signup = () => {
  const dispatch = useDispatch()
  const [signup] = useSignupMutation()
  const { errorMessage, fields } = useSelector(state => state.signup)

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (fields.password != fields.password_conf) {
      dispatch(error("Passwords do not match"))
      return;
    }
    signup(fields)
    dispatch(reset())
    };

  return (
    <div className="container">
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit} id="signup-form">
              {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
              <div className="container">
                <div className="row">
                  <div className="col form-floating mb-3">
                    <input
                      onChange={e => dispatch(handleFirstNameChange(e.target.value))}
                      value={fields.first_name}
                      required
                      type={`text`}
                      name="first_name"
                      id="first_name"
                      className="form-control"
                    />
                    <label htmlFor="first_name">First Name</label>
                  </div>
                  <div className="col form-floating mb-3">
                    <input
                      onChange={e => dispatch(handleLastNameChange(e.target.value))}
                      value={fields.last_name}
                      required
                      type={`text`}
                      name="last_name"
                      id="last_name"
                      className="form-control"
                    />
                    <label htmlFor="last_name">Last Name</label>
                  </div>
                </div>
                <div className="row">
                  <div className="form-floating mb-3">
                    <input
                     onChange={e => dispatch(handleUsernameChange(e.target.value))}
                      value={fields.username}
                      required
                      type={`text`}
                      name="username"
                      id="username"
                      className="form-control"
                    />
                    <label htmlFor="username">Username</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      onChange={e => dispatch(handlePasswordChange(e.target.value))}
                      value={fields.password}
                      required
                      type={`password`}
                      name="password"
                      id="password"
                      className="form-control"
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      onChange={e => dispatch(handlePasswordConfChange(e.target.value))}
                      value={fields.password_conf}
                      required
                      type={`password`}
                      name="password_conf"
                      id="password_conf"
                      className="form-control"
                    />
                    <label htmlFor="password_conf">Password Confirmation</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      onChange={e => dispatch(handleEmailChange(e.target.value))}
                      value={fields.email}
                      required
                      type={`email`}
                      name="email"
                      id="email"
                      className="form-control"
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      onChange={e => dispatch(handleAddress1Change(e.target.value))}
                      value={fields.address_1}
                      required
                      type={`text`}
                      name="address_1"
                      id="address_1"
                      className="form-control"
                    />
                    <label htmlFor="address_1">Address Line 1</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      onChange={e => dispatch(handleAddress2Change(e.target.value))}
                      value={fields.address_2}
                      type={`text`}
                      name="address_2"
                      id="address_2"
                      className="form-control"
                    />
                    <label htmlFor="address_2">Address Line 2</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col form-floating mb-3">
                    <input
                      onChange={e => dispatch(handleCityChange(e.target.value))}
                      value={fields.city}
                      required
                      type={`text`}
                      name="city"
                      id="city"
                      className="form-control"
                    />
                    <label htmlFor="city">City</label>
                  </div>
                  <div className="col form-floating mb-3">
                    <input
                      onChange={e => dispatch(handleStateChange(e.target.value))}
                      value={fields.state}
                      required
                      type={`text`}
                      name="state"
                      id="state"
                      className="form-control"
                    />
                    <label htmlFor="state">State</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      onChange={e => dispatch(handleZipcodeChange(e.target.value))}
                      value={fields.zipcode}
                      required
                      type={`number`}
                      name="zipcode"
                      id="zipcode"
                      className="form-control"
                    />
                    <label htmlFor="zipcode">Zipcode</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <input
                      onChange={e => dispatch(handleSkiChange(e.target.checked))}
                      checked={fields.ski === true}
                      className="form-check-input"
                      type="checkbox"
                      name="ski"
                      id="inlineCheckbox1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox1"
                    >
                      Ski
                    </label>
                  </div>
                  <div className="col">
                    <input
                      onChange={e => dispatch(handleSnowboardChange(e.target.checked))}
                      checked={fields.snowboard === true}
                      className="form-check-input"
                      type="checkbox"
                      name="snowboard"
                      id="inlineCheckbox2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox2"
                    >
                      Snowboard
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="form-floating mb-3">
                    <input
                      onChange={e => dispatch(handlePictureUrlChange(e.target.value))}
                      value={fields.picture_url}
                      type={`url`}
                      name="picture_url"
                      id="picture_url"
                      className="form-control"
                    />
                    <label htmlFor="picture_url">Picture Url</label>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Signup</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
