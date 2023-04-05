import React, { useState } from "react";

function SignupForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    email: "",
    address_1: "",
    address_2: "",
    city: "",
    state: "",
    zipcode: "",
    ski: false,
    snowboard: false,
    picture_url: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const accountUrl = "http://localhost:8000/api/accounts/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(JSON.stringify(formData));
    const response = await fetch(accountUrl, fetchConfig);

    if (response.ok) {
      setFormData({
        first_name: "",
        last_name: "",
        username: "",
        password: "",
        email: "",
        address_1: "",
        address_2: "",
        city: "",
        state: "",
        zipcode: "",
        ski: false,
        snowboard: false,
        picture_url: "",
      });
    }
  };

  const handleFormChange = (e) => {
    const value = e.target.value;
    const inputName = e.target.name;
    setFormData({
      ...formData,
      [inputName]: value,
    });
  };

  const onCheck = (e) => {
    const inputName = e.target.name;
    if (!e.target.checked) {
      setFormData({ ...formData, [inputName]: false });
    } else if (e.target.checked) {
      setFormData({ ...formData, [inputName]: true });
    }
  };

  return (
    <div className="container big-container">
      <div className="row">
        <div className="offset-3 col-6">
          <div
            className="shadow-lg p-4 mt-4 bg-primary bg-gradient"
            style={{ borderRadius: 8 }}
          >
            <h1 className="snow">Sign Up</h1>
            <form onSubmit={handleSubmit} id="signup-form">
              <div className="container container-top">
                <div className="row">
                  <div className="col form-floating mb-3">
                    <input
                      onChange={handleFormChange}
                      value={formData.first_name}
                      placeholder="First Name"
                      required
                      type="text"
                      name="first_name"
                      id="first_name"
                      className="form-control bg-secondary bg-opacity-50 bg-gradient"
                    />
                    <label htmlFor="first_name">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;First
                      Name
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </label>
                  </div>
                  <div className="col form-floating mb-3">
                    <input
                      onChange={handleFormChange}
                      value={formData.last_name}
                      placeholder="Last Name"
                      required
                      type="text"
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
                      onChange={handleFormChange}
                      value={formData.username}
                      placeholder="Username"
                      required
                      type="text"
                      name="username"
                      id="username"
                      className="form-control bg-secondary bg-opacity-50 bg-gradient"
                    />
                    <label htmlFor="username">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Username
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      onChange={handleFormChange}
                      value={formData.password}
                      placeholder="Password"
                      required
                      type="text"
                      name="password"
                      id="password"
                      className="form-control bg-secondary bg-opacity-50 bg-gradient"
                    />
                    <label htmlFor="password">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Password
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      onChange={handleFormChange}
                      value={formData.email}
                      placeholder="Email"
                      required
                      type="text"
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
                      onChange={handleFormChange}
                      value={formData.address_1}
                      placeholder="Address Line 1"
                      required
                      type="text"
                      name="address_1"
                      id="address_1"
                      className="form-control bg-secondary bg-opacity-50 bg-gradient"
                    />
                    <label htmlFor="address_1" class="text-center">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Address
                      Line 1
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      onChange={handleFormChange}
                      value={formData.address_2}
                      placeholder="Address Line 2"
                      type="text"
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
                      onChange={handleFormChange}
                      value={formData.city}
                      placeholder="City"
                      required
                      type="text"
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
                      onChange={handleFormChange}
                      value={formData.state}
                      placeholder="State"
                      required
                      type="text"
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
                      onChange={handleFormChange}
                      value={formData.zipcode}
                      placeholder="Zipcode"
                      required
                      type="text"
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
                  <div className="col">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                      onChange={onCheck}
                      checked={formData.ski === true}
                      className="form-check-input bg-secondary bg-opacity-50 bg-gradient"
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
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                      onChange={onCheck}
                      checked={formData.snowboard === true}
                      className="form-check-input bg-secondary bg-opacity-50 bg-gradient"
                      type="checkbox"
                      name="snowboard"
                      id="inlineCheckbox1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox1"
                    >
                      Snowboard
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="upper-padding-form form-floating mb-3">
                    <input
                      onChange={handleFormChange}
                      value={formData.picture_url}
                      placeholder="Picture Url"
                      type="text"
                      name="picture_url"
                      id="picture_url"
                      className="form-control bg-secondary bg-opacity-50 bg-gradient"
                    />
                    <label htmlFor="picture_url" className="url-label">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Picture
                      Url (optional)
                    </label>
                  </div>
                </div>
              </div>
              <div class="button-box col d-flex justify-content-center align-items-center">
                <button className="butt btn-lg btn-primary">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
