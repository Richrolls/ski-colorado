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
  reset,
} from "./signupSlice";
import { useSignupMutation } from "./signup";
import ErrorMessage from "./errorhandling/ErrorMessage.js"

const Signup = () => {
  const dispatch = useDispatch();
  const [signup] = useSignupMutation();
  const { errorMessage, fields } = useSelector((state) => state.signup);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (fields.password != fields.password_conf) {
      dispatch(error("Passwords do not match"));
      return;
    }
    signup(fields);
    dispatch(reset());
  };

  return (
    <div className="container">
      <div className="row">
        <div className="offset-3 col-6">
          <div
            className="shadow p-4 mt-4 bg-primary bg-gradient"
            style={{ borderRadius: 8 }}
          >
            <h1 className="snow">Sign Up</h1>
            <form onSubmit={handleSubmit} id="signup-form">
              {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
              <div>
                <h3>
                  Already have an account?&nbsp;&nbsp;
                  <a href="#" class="link-warning">
                    Click here!
                  </a>
                </h3>
              </div>
              <div className="container container-top">
                <div className="row">
                  <div className="col form-floating mb-3">
                    <input
                      onChange={(e) =>
                        dispatch(handleFirstNameChange(e.target.value))
                      }
                      value={fields.first_name}
                      placeholder="First Name"
                      required
                      type={`text`}
                      name="first_name"
                      id="first_name"
                      className="form-control bg-secondary bg-opacity-50 bg-gradient"
                    />
                    <label htmlFor="first_name">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;First
                      Name
                    </label>
                  </div>
                  <div className="col form-floating mb-3">
                    <input
                      onChange={(e) =>
                        dispatch(handleLastNameChange(e.target.value))
                      }
                      value={fields.last_name}
                      placeholder="Last Name"
                      required
                      type={`text`}
                      name="last_name"
                      id="last_name"
                      className="form-control bg-secondary bg-opacity-50 bg-gradient"
                    />
                    <label htmlFor="last_name">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Last
                      Name
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="form-floating mb-3">
                    <input
                      onChange={(e) =>
                        dispatch(handleUsernameChange(e.target.value))
                      }
                      value={fields.username}
                      required
                      placeholder="Username"
                      type={`text`}
                      name="username"
                      id="username"
                      className="form-control bg-secondary bg-opacity-50 bg-gradient"
                    />
                    <label htmlFor="username">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Username
                    </label>
                  </div>
                  <div className="col form-floating mb-3">
                    <input
                      onChange={(e) =>
                        dispatch(handlePasswordChange(e.target.value))
                      }
                      value={fields.password}
                      required
                      placeholder="Password"
                      type={`password`}
                      name="password"
                      id="password"
                      className="form-control bg-secondary bg-opacity-50 bg-gradient"
                    />
                    <label htmlFor="password">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Password
                    </label>
                  </div>
                  <div className="col form-floating mb-3">
                    <input
                      onChange={(e) =>
                        dispatch(handlePasswordConfChange(e.target.value))
                      }
                      value={fields.password_conf}
                      required
                      placeholder="Confirm Password"
                      type={`password`}
                      name="password_conf"
                      id="password_conf"
                      className="form-control bg-secondary bg-opacity-50 bg-gradient"
                    />
                    <label htmlFor="password_conf">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Confirm
                      Password
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      onChange={(e) =>
                        dispatch(handleEmailChange(e.target.value))
                      }
                      value={fields.email}
                      placeholder="Email"
                      required
                      type={`email`}
                      name="email"
                      id="email"
                      className="form-control bg-secondary bg-opacity-50 bg-gradient"
                    />
                    <label htmlFor="email">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      onChange={(e) =>
                        dispatch(handleAddress1Change(e.target.value))
                      }
                      value={fields.address_1}
                      placeholder="Address Line 1"
                      required
                      type={`text`}
                      name="address_1"
                      id="address_1"
                      className="form-control bg-secondary bg-opacity-50 bg-gradient"
                    />
                    <label htmlFor="address_1">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Address
                      Line 1
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      onChange={(e) =>
                        dispatch(handleAddress2Change(e.target.value))
                      }
                      value={fields.address_2}
                      placeholder="Address Line 2"
                      type={`text`}
                      name="address_2"
                      id="address_2"
                      className="form-control bg-secondary bg-opacity-50 bg-gradient"
                    />
                    <label htmlFor="address_2">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Address
                      Line 2
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col form-floating mb-3">
                    <input
                      onChange={(e) =>
                        dispatch(handleCityChange(e.target.value))
                      }
                      value={fields.city}
                      placeholder="City"
                      required
                      type={`text`}
                      name="city"
                      id="city"
                      className="form-control bg-secondary bg-opacity-50 bg-gradient"
                    />
                    <label htmlFor="city">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;City
                    </label>
                  </div>
                  <div className="col form-floating mb-3">
                    <input
                      onChange={(e) =>
                        dispatch(handleStateChange(e.target.value))
                      }
                      value={fields.state}
                      placeholder="State"
                      required
                      type={`text`}
                      name="state"
                      id="state"
                      className="form-control bg-secondary bg-opacity-50 bg-gradient"
                    />
                    <label htmlFor="state">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;State
                    </label>
                  </div>
                  <div className="col form-floating mb-3">
                    <input
                      onChange={(e) =>
                        dispatch(handleZipcodeChange(e.target.value))
                      }
                      value={fields.zipcode}
                      placeholder="Zipcode"
                      required
                      type={`number`}
                      name="zipcode"
                      id="zipcode"
                      className="form-control bg-secondary bg-opacity-50 bg-gradient"
                    />
                    <label htmlFor="zipcode">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Zipcode
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="form-floating mb-3">
                    <input
                      onChange={(e) =>
                        dispatch(handlePictureUrlChange(e.target.value))
                      }
                      value={fields.picture_url}
                      placeholder="Picture Url"
                      type={`url`}
                      name="picture_url"
                      id="picture_url"
                      className="form-control bg-secondary bg-opacity-50 bg-gradient"
                    />
                    <label htmlFor="picture_url">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Profile
                      Picture URL (optional)
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    onChange={(e) =>
                      dispatch(handleSkiChange(e.target.checked))
                    }
                    checked={fields.ski === true}
                    className="form-check-input bg-secondary bg-opacity-50"
                    type="checkbox"
                    name="ski"
                    id="inlineCheckbox1"
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox1">
                    Skier?
                  </label>
                </div>
                <div className="col">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    onChange={(e) =>
                      dispatch(handleSnowboardChange(e.target.checked))
                    }
                    checked={fields.snowboard === true}
                    className="form-check-input bg-secondary bg-opacity-50"
                    type="checkbox"
                    name="snowboard"
                    id="inlineCheckbox2"
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox2">
                    Snowboarder?
                  </label>
                </div>
                <div className="row">
                  <div className="col justify-content-center">
                    <img
                      src="https://i.imgur.com/trwig2h.gif"
                      class="img-fluid rounded mx-auto d-block"
                    />
                  </div>
                  <div className="col justify-content-center">
                    <img
                      src="https://i.imgur.com/oW26dZg.gif"
                      class="img-fluid rounded mx-auto d-block"
                    />
                  </div>
                </div>
              </div>
              <div class="button-box col d-flex justify-content-center">
                <button className="butt btn-lg btn-primary">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
