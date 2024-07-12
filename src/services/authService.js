// src/services/authService.js
import axios from "axios";
import { getCSRFToken } from "../utils/csrf";

const API_URL = "http://127.0.0.1:8000"; // Replace with your API URL

const login = async (email, password) => {
  try {
    const response = await axios.post(
      `${API_URL}/login`,
      {
        email,
        password,
      },
      {
        headers: {
          "X-CSRFToken": getCSRFToken(),
        },
      }
    );
    if (response.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    throw new Error("Login failed. Please check your credentials.");
  }
};

const signup = (username, email, password) => {
  try {
    const response = axios.post(
      `${API_URL}/register`,
      { username, email, password },
      {
        headers: {
          "X-CSRFToken": getCSRFToken(),
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Signup failed. Please try again.");
  }
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  login,
  signup,
  logout,
  getCurrentUser,
};

export default authService;
