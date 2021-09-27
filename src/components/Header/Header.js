/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Header.scss";
import logo from "../../images/logo.svg";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="Header d-flex justify-content-between align-items-center w-100">
      <a className="Header__logo" href="#">
        <img src={logo} alt="Sunny Side Logo" />
      </a>
      <button
        className={`Header__menu-btn p-0 align-items-center justify-content-center border-0 ${
          showMenu ? "Header__nav--close" : ""
        }`}
        aria-expanded={showMenu}
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <span className="Header__menu"></span>
        <span className="sr-only">Menu</span>
      </button>
      <nav
        className={`Header__nav rounded-1 ${
          showMenu ? "menuvisible" : "menuhidden"
        }`}
        style={showMenu ? { transform: "translateY(0)" } : {}}
      >
        <ul className="Header__nav-list">
          <li className="Header__nav-item">
            <a
              href="#"
              target="_self"
              className="Header__nav-link text-capitalize"
            >
              about
            </a>
          </li>
          <li className="Header__nav-item">
            <a
              href="#"
              target="_self"
              className="Header__nav-link text-capitalize"
            >
              services
            </a>
          </li>
          <li className="Header__nav-item">
            <a
              href="#"
              target="_self"
              className="Header__nav-link text-capitalize"
            >
              projects
            </a>
          </li>
          <li className="Header__nav-item Header__nav-item--highlight text-uppercase">
            <a
              href="#"
              target="_self"
              className="Header__nav-link Header__nav-link--highlight rounded-pill"
            >
              contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
