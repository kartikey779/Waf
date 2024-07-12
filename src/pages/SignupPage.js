// src/pages/SignupPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Input from "../components/Common/Input";
// import Button from "../components/Common/Button";
import authService from "../services/authService";
import {
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from "../utils/validations";
import "../styles/signup.css";

const SignupPage = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!validateEmail(credentials.email))
      tempErrors.email = "Invalid email format";
    if (!validatePassword(credentials.password))
      tempErrors.password =
        "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, and a number";
    if (
      !validateConfirmPassword(
        credentials.password,
        credentials.confirmPassword
      )
    )
      tempErrors.confirmPassword = "Passwords do not match";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      await authService.signup(
        credentials.username,
        credentials.email,
        credentials.password
      );
      //   console.log(credentials);
      navigate("/login");
    } catch (error) {
      setErrors({ api: error.response?.data?.error || error.message });
    }
  };

  return (
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-5">
          <div class="card">
            <h2 class="card-title text-center">
              Register <a href="http://opensnippets.com" style={{ textDecoration: 'none' }}>What's app ads</a>
            </h2>
            <div class="card-body py-md-4">
              {errors.api && <p className="error">{errors.api}</p>}
              <form _lpchecked="1" onSubmit={handleSubmit}>
                <div class="form-group">
                  <input
                    class="form-control"
                    name="username"
                    type="text"
                    value={credentials.username}
                    onChange={handleChange}
                    placeholder="Username"
                  />
                </div>
                {errors.email && <p className="error">{errors.email}</p>}
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
                {errors.password && <p className="error">{errors.password}</p>}
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
                <div class="form-group">
                  <input
                    class="form-control"
                    name="confirmPassword"
                    type="password"
                    value={credentials.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                  />
                </div>
                {errors.confirmPassword && (
                  <p className="error">{errors.confirmPassword}</p>
                )}
                <div class="d-flex flex-row align-items-center justify-content-between">
                  <a href="login" style={{ textDecoration: "none" }}>
                    Login
                  </a>
                  <button type="submit" class="btn btn-primary">
                    Create Account
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

export default SignupPage;
