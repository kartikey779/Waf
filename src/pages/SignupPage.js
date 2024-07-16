import React, { useState } from "react";
import "@fontsource/roboto";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../styles/secondSignup.css";
import { FaApple, FaGoogle, FaTwitter } from "react-icons/fa";
import authService from "../services/authService";
import {
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from "../utils/validations";
import { useNavigate } from "react-router-dom";

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
    <Container fluid className="signup-container bg-white">
      <Row>
        <Col md={6} className="p-0">
          <div className="image-section">
            <img
              src="https://images.unsplash.com/photo-1517698799921-960dd00d9072?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="color_image"
              className="img-fluid"
              style={{ filter: "brightness(30%)" }}
            />
            <div className="overlay">
              {/* <p className="quote">
                <div
                  className="features-list"
                  style={{ fontFamily: "Roboto Serif", wordSpacing: "-2px" }}
                >
                  <ul>
                    <li>
                      <strong>Targeted Advertising:</strong> Allow advertisers
                      to precisely target their audience based on demographics,
                      location, interests, and behavior, ensuring that ads reach
                      the most relevant users.
                    </li>
                    <li>
                      <strong>Ad Formats:</strong> Support multiple ad formats
                      such as text, image, video, and carousel ads to provide
                      versatility in how advertisers can engage with their
                      audience.
                    </li>
                  </ul>
                </div>
              </p>
              <p className="author">our Company</p> */}
            </div>
          </div>
        </Col>
        <Col
          md={6}
          className="form-section d-flex align-items-center justify-content-center bg-white"
        >
          <Form className="signup-form" onSubmit={handleSubmit}>
            <h2 className="pt-5">Welcome back!</h2>
            {errors.api && <p className="error alert alert-danger">{errors.api}</p>}
            <Form.Group controlId="formPhoneNumber">
              {/* <Form.Label>Phone Number</Form.Label> */}
              <Form.Control
                type="text"
                name="username"
                placeholder="username"
                style={{ padding: "8px" }}
                value={credentials.username}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.email && <p className="error alert alert-danger">{errors.email}</p>}
            <Form.Group controlId="formEmail">
              {/* <Form.Label>Email</Form.Label> */}
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                style={{ padding: "8px" }}
                value={credentials.email}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password && <p className="error alert alert-danger">{errors.password}</p>}
            <Form.Group controlId="formPassword">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={handleChange}
                style={{ padding: "8px" }}
              />
            </Form.Group>
            <Form.Group controlId="formConfirmPassword">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={credentials.confirmPassword}
                onChange={handleChange}
                style={{ padding: "8px" }}
              />
            </Form.Group>
            {errors.confirmPassword && (
              <p className="error alert alert-danger">{errors.confirmPassword}</p>
            )}
            <Button variant="dark" type="submit" className="w-100" block>
              Create account
            </Button>
            <div className="text-center">
              <p>or</p>
              <p>
                Already have an account? <a href="login">Sign in</a>
              </p>
            </div>
            <div className="social-login">
              <Button variant="outline-dark" className="mb-2" block>
                <i className="bi bi-google">
                  <FaGoogle />
                </i>
                Continue with Google
              </Button>
              <Button variant="outline-dark" className="mb-2" block>
                <i className="bi bi-apple">
                  <FaApple />
                </i>
                Continue with Apple
              </Button>
              <Button variant="outline-dark" block>
                <FaTwitter />
                Continue with Twitter
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupPage;
