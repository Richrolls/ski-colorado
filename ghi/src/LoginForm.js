import React, { useState, useEffect } from "react";

function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const loginUrl = `http://localhost:8000/token`;

    const fetchConfig = {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(loginUrl, fetchConfig);

    if (response.ok) {
      setFormData({
        username: "",
        password: "",
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

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Login</h1>
          <form onSubmit={handleSubmit} id="login-form">
            <div className="form-floating mb-3">
              <input
                onChange={handleFormChange}
                value={formData.username}
                required
                type="text"
                name="username"
                id="username"
                className="form-control"
              />
              <label htmlFor="username">Username</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleFormChange}
                value={formData.password}
                required
                type="password"
                name="password"
                id="password"
                className="form-control"
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
