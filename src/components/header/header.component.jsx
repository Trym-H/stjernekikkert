import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header-nav-container">
      <Link className="header-nav-link" to="/">
        Home
      </Link>
      <Link className="header-nav-link" to="/launch">
        Upcoming Launches
      </Link>
      <Link className="header-nav-link" to="/iss">
        ISS
      </Link>
      <Link className="header-nav-link" to="/nasa">
        NASA
      </Link>
    </nav>
  );
};

export default Header;
