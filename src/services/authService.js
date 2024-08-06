// src/services/authService.js
import axios from "axios";
import { getCSRFToken } from "../utils/csrf";

const API_URL = "http://127.0.0.1:8000"; // Replace with your API URL


const login = async (username, password) => {
  
  try {
    const response = await axios.post(
      `${API_URL}/accounts/loginA/`,
      {
        username,
        password,
      },
      {
        headers: {
          "X-CSRFToken": getCSRFToken(),
          "Content-Type": "application/json",
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

const signup = async (username, email, password, password2) => {
  try {
    const response = await axios.post(
      `${API_URL}/accounts/register/`,
      { username, email, password, password2 },
      {
        headers: {
          "X-CSRFToken": getCSRFToken(),
          "Content-Type": "application/json",
        },
      }
    );
    if (response.data.token){
      const data = {token: response.data.token};
      localStorage.setItem("user", JSON.stringify(data));
    }
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
