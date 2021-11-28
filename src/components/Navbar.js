import React from "react";
import img from "../assets/icon.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <Link className="navbar-brand" to="#">
          <img src={img} width="30" height="30" alt="" />
        </Link>
        <button
          className="navbar-toggler "
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor03"
          aria-controls="navbarColor03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarColor03">
          <ul className="navbar-nav ml-auto mr-md-5">
            <li className="mr-md-2 nav-item active">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="mr-md-2  nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="mr-md-2 nav-item">
              <Link className="nav-link" to="/Login">
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
