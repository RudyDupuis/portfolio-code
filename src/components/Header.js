import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <NavLink to="/">
        <img
          src="./assets/img/logo.webp"
          alt="Un R en forme de pince et un D"
          className="logo"
        />
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/infos"
              className={(nav) => (nav.isActive ? "active" : "")}
            >
              Infos
            </NavLink>
          </li>
          <li className="portfolio">
            <p>Portfolio</p>
            <ul>
              <li>
                <NavLink
                  to="/projet-1"
                  className={(nav) => (nav.isActive ? "active" : "")}
                >
                  Projet 1
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projet-2"
                  className={(nav) => (nav.isActive ? "active" : "")}
                >
                  Projet 2
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink
                  to="/projet-3"
                  className={(nav) => (nav.isActive ? "active" : "")}
                >
                  Projet 3
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={(nav) => (nav.isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
