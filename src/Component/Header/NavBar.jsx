import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import menu from "../../Assets/menu.svg";
import cross from "../../Assets/menuCross.svg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../features/User";
import {
  googleLogout,
} from "@react-oauth/google";

import "./NavBar.css";


const NavBar = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useSelector((state) => state.user);
  console.log("User:", user);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };
  const logoutf = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    window.location.href = "/";
  };
  const handlegooglelogout = () => {
    localStorage.removeItem("user");
    dispatch(logout());
    googleLogout();
  };

  const serverURL = "";
  const devUrl = "http://localhost:5000";

  return (
    <nav className="navBar">
      <div className="logo">
        <HashLink to="/">
          <img src={logo} alt="NIDAAN" className="navLogo" />
        </HashLink>
      </div>
      <div className="links">
        <div className={`navHiddenContainer ${isMenuOpen ? "open" : ""}`}>
          <div className="navLinkConatiner">
            <div className="navLink">
              <HashLink smooth to="/#chatBot" onClick={handleLinkClick}>
                Home
              </HashLink>
              <HashLink smooth to="/blogs#blog-top" onClick={handleLinkClick}>
                Blogs
              </HashLink>
              <HashLink smooth to="/pricing#priceTop" onClick={handleLinkClick}>
                Pricing
              </HashLink>
              <HashLink smooth to="/contact#contactTop" onClick={handleLinkClick}>
                Contact Us
              </HashLink>
            </div>
            {user.user.email ? (
              <>
                {user.user.type === "Google" ? (
                  <>
                    <p>signed in with google via {user.user.email}</p>
                    <button className="registerBtn" onClick={handlegooglelogout}>
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <div className="navbar-user-info">

                      <p className="">Signed in as {user.user.username}</p>
                      {/* user profile picture */}
                      <img
                        src={user.user.profilePicture}
                        className="profile-icon"
                        alt=""

                      />
                    </div>
                    <button className="registerBtn" onClick={logoutf}>
                      Logout
                    </button>
                  </>
                )}
              </>
            ) : (
              <div className="registerSection">
                <Link to="/register">
                  <button className="registerBtn" onClick={handleLinkClick}>
                    Sign In
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <img
        src={menu}
        alt=""
        id="menuBtn"
        className={`menuBtn ${isMenuOpen ? "" : "open"}`}
        onClick={toggleMenu}
      />
      <img
        src={cross}
        alt=""
        id="crossBtn"
        className={`crossBtn ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default NavBar;
