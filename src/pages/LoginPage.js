// src/LoginForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";
import Photo from "../static/logo192.jpg";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { FaApple, FaGoogle, FaTwitter } from "react-icons/fa";

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
      navigate("/register");
      setError(error.message);
    }
  };
  return (
    <Container
      className="d-flex justify-content-center align-items-center bg-white "
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Form onSubmit={handleSubmit}>
          <div className="text-center mb-4 ">
            <img
              className="rounded-circle"
              src={Photo}
              alt="logo"
              style={{ width: "50px", height: "50px" }}
            />
            <h3>Welcome back</h3>
            <p>Please enter your details to sign in.</p>
          </div>
          <Row className="mb-3">
            <Col>
              <Button variant="outline-dark" className="w-100">
                <i className="bi bi-apple">
                  <FaApple />
                </i>
              </Button>
            </Col>
            <Col>
              <Button variant="outline-dark" className="w-100">
                <i className="bi bi-google">
                  <FaGoogle />
                </i>
              </Button>
            </Col>
            <Col>
              <Button variant="outline-dark" className="w-100">
                <i className="bi bi-twitter">
                  <FaTwitter />
                </i>
              </Button>
            </Col>
          </Row>
          <div className="text-center mb-3">OR</div>
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label className="mb-0">E-Mail Address</Form.Label>
            <Form.Control
              className="mt-0"
              name="email"
              type="email"
              placeholder="Enter your email..."
              value={credentials.email}
              onChange={handleChange}
              style={{ padding: "8px" }}
            />
          </Form.Group>
          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label className="mb-0">Password</Form.Label>
            <Form.Control
              className="mt-0"
              type="password"
              name="password"
              placeholder="Enter your password..."
              value={credentials.password}
              onChange={handleChange}
              style={{ padding: "8px" }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox" className="mb-3">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <div className="text-end mb-3">
            <a href="#forgot-password">Forgot password?</a>
          </div>
          {error && <p className="error">{error}</p>}
          <Button variant="dark" type="submit" className="w-100">
            Sign in
          </Button>
          <div className="text-center mt-3">
            Don't have an account yet? <a href="register">Sign Up</a>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default LoginPage;
