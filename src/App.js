// src/App.js
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import RootLayout from "./components/RootLayout/RootLayout";
import Home from "./components/Home/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Contacts from "./components/Contacts/Contacts";
import { isMobile } from "react-device-detect";

function App() {
  const [isUser, setUser] = useState(false);

  useEffect(() => {
    const storedAuth = localStorage.getItem("user");
    if (storedAuth !== null) {
      setUser(true);
    }
    if (isMobile) {
      alert("bola tha na mobile me nahi chalana! :)");
    }
  }, []);

  const routes = [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: isUser ? <Home /> : <LoginPage/>,
        },
        { path: "/*", element: <Home /> },
        { path: "/contacts", element: <Contacts /> },
      ],
    },
    { path: "/register", element: <SignupPage /> },
    { path: "/login", element: <LoginPage /> },
  ];
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default App;
