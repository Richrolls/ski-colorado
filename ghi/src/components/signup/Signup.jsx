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
import { useSignupMutation } from "../login/auth";
import ErrorMessage from "../errorhandling/ErrorMessage";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const [signup] = useSignupMutation();
  const { errorMessage, fields } = useSelector((state) => state.signup);
  const navigate = useNavigate();

  const handleJoinClick = (e) => {
    navigate("/login");
  };

  const handleMainClick = (e) => {
    navigate("/");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (fields.password != fields.password_conf) {
      dispatch(error("Passwords do not match"));
      return;
    }
    dispatch(reset());
    const result = await signup(fields).unwrap();
    if (result.access_token) {
      navigate("/home");
  };
}

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
              <a
                href="#"
                className="link-warning"
                onClick={(e) => dispatch(handleMainClick(e.target.value))}
              >
                <button className="butt btn-sm btn-primary">
                  Back
                </button>
              </a>
              <h1 className="snow">Sign Up</h1>
              <form onSubmit={handleSubmit} id="signup-form">
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
                <div>
                  <h3>
                    Already have an account?&nbsp;&nbsp;
                    <a
                      href="#"
                      className="link-warning"
                      onClick={(e) => dispatch(handleJoinClick(e.target.value))}
                    >
                      Click here!
                    </a>
                  </h3>
                </div>
                <div className="container container-top">
                  <div className="row">
                    <div className="col mb-3">
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
                    </div>
                    <div className="col mb-3">
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
                    </div>
                  </div>
                  <div className="row">
                    <div className="mb-3">
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
                    </div>
                    <div className="col mb-3">
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
                    </div>
                    <div className="col mb-3">
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
                    </div>
                    <div className="mb-3">
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
                    </div>
                    <div className="mb-3">
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
                    </div>
                    <div className="mb-3">
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
                    </div>
                  </div>
                  <div className="row">
                    <div className="col mb-3">
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
                    </div>
                    <div className="col mb-3">
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
                    </div>
                    <div className="col mb-3">
                      <input
                        onChange={(e) =>
                          dispatch(handleZipcodeChange(e.target.value))
                        }
                        value={fields.zipcode}
                        placeholder="Zipcode"
                        required
                        type={`text`}
                        name="zipcode"
                        id="zipcode"
                        className="form-control bg-secondary bg-opacity-50 bg-gradient"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="mb-3">
                      <input
                        onChange={(e) =>
                          dispatch(handlePictureUrlChange(e.target.value))
                        }
                        value={fields.picture_url}
                        placeholder="Picture Url (optional)"
                        type={`url`}
                        name="picture_url"
                        id="picture_url"
                        className="form-control bg-secondary bg-opacity-50 bg-gradient"
                      />
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
                      className="bg-secondary bg-opacity-50"
                      type="checkbox"
                      name="ski"
                      id="inlineCheckbox1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox1"
                    >
                      &nbsp;Skier?
                    </label>
                  </div>
                  <div className="col">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                      onChange={(e) =>
                        dispatch(handleSnowboardChange(e.target.checked))
                      }
                      checked={fields.snowboard === true}
                      className="bg-secondary bg-opacity-50"
                      type="checkbox"
                      name="snowboard"
                      id="inlineCheckbox2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox2"
                    >
                      &nbsp;Snowboarder?
                    </label>
                  </div>
                  <div className="row">
                    <div className="col justify-content-center">
                      <img
                        src="https://i.imgur.com/trwig2h.gif"
                        className="img-fluid rounded mx-auto d-block"
                      />
                    </div>
                    <div className="col justify-content-center">
                      <img
                        src="https://i.imgur.com/oW26dZg.gif"
                        className="img-fluid rounded mx-auto d-block"
                      />
                    </div>
                  </div>
                </div>
                <div className="button-box col d-flex justify-content-center">
                  <button className="butt btn-lg btn-primary">Create</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
