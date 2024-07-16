import React from "react";
import { FaBuysellads } from "react-icons/fa";

const NavigationBar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light d-flex justify-content-around"
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
              <a class="nav-link" href="/">
                Dashboard
              </a>
            </li>
            <li class="nav-item mx-5">
              <a class="nav-link" href="contacts">
                Contacts
              </a>
            </li>
            <li class="nav-item mx-5">
              <a class="nav-link" href="/ads">
                About
              </a>
            </li>
            <li class="nav-item dropdown mx-5">
              <a
                class="nav-link dropdown-toggle"
                href="practice"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div class="dropdown-menu" >
                <a class="dropdown-item" href=".">
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

      <span className="ml-5" >
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
