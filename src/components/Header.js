import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <NavLink to="/">
        <p className="logo">RD</p>
      </NavLink>
      <nav>
        <ul>
          <NavLink to="/infos">
            <li>Infos</li>
          </NavLink>
          <li className="portfolio">
            <p>Portfolio</p>
            <ul>
              <NavLink to="/projet-1">
                <li>Projet 1</li>
              </NavLink>
            </ul>
          </li>
          <NavLink to="/contact">
            <li>Contact</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
