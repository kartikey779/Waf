// src/pages/LoginPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";
import "../styles/Auth.css";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.login(credentials.email, credentials.password);
      // Redirect to the appropriate dashboard based on user type
      navigate("/dashboard/doctor"); // or /dashboard/patient based on user type
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-5">
          <div class="card">
            <h2 class="card-title text-center">
              Login{" "}
              <a
                href="http://opensnippets.com"
                style={{ textDecoration: "none" }}
              >
                What's app ads
              </a>
            </h2>
            <div class="card-body py-md-4">
              {error && <p className="error">{error}</p>}
              <form _lpchecked="1" onSubmit={handleSubmit}>
                <div class="form-group">
                  <input
                    class="form-control"
                    name="email"
                    type="email"
                    value={credentials.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                </div>

                <div class="form-group">
                  <input
                    class="form-control"
                    name="password"
                    type="password"
                    value={credentials.password}
                    onChange={handleChange}
                    placeholder="Password"
                  />
                </div>

                <div class="d-flex flex-row align-items-center justify-content-between">
                <a href="register" style={{ textDecoration: "none" }}>
                    Create account
                  </a>
                  <button type="submit" class="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
