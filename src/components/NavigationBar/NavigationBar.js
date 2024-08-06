import React from "react";
import { FaBuysellads } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/authService";

const NavigationBar = () => {
  const navigate = useNavigate();

  const handleLogout = () =>{
    try{
      authService.logout();
      navigate("/")
    }
    catch(error){
      console.log(error);
    }
  };
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light d-flex justify-content-between"
      style={{ borderRadius: "52px",backgroundColor:"#FEFEFA",color:"#1B1B1B" }}
    >
      <span className="d-flex">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{border:"None"}}
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <span className="mx-2" style={{marginTop:"6px"}}><FaBuysellads/></span>
        <a class="navbar-brand" href="/">
          <b>Cha-Ads</b>
        </a>
      </span>
      <span className="mx-5">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto ">
            <li class="nav-item active mx-5">
              <Link class="nav-link" to={""}>
                Dashboard
              </Link>
            </li>
            <li class="nav-item mx-5">
              <Link class="nav-link" to="contacts">
                Contacts
              </Link>
            </li>
            <li class="nav-item mx-5">
              <Link class="nav-link" to="/ads">
                About
              </Link>
            </li>
            <li class="nav-item dropdown mx-5">
              <Link
                class="nav-link dropdown-toggle"
                to=""
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown-menu"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </Link>
              <div class="dropdown-menu" >
                <a href=".." class="dropdown-item" >
                  Action
                </a>
                <a class="dropdown-item" href=".">
                  Another action
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href=".">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
        </div>
      </span>

      <span className="ml-5" onClick={handleLogout}>
        <span class="btn" style={{ borderRadius: "52px",backgroundColor:"#1B1B1B",color:"#FEFEFA" }} >
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
            class="rounded-circle mx-2"
            height="22"
            alt="Avatar"
            loading="lazy"
          />

          Profile
        </span>
      </span>
    </nav>
  );
};

export default NavigationBar;
