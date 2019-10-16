import React, { useState, useEffect } from "react";
import "./header.styles.scss";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [activeTab, setActiveTab] = useState("");

  let routeName = useLocation();

  useEffect(() => {
    setActiveTab(routeName.pathname.substr(1));
  }, [routeName]);

  return (
    <nav className="header-nav-container">
      <Link
        className={`header-nav-link ${
          activeTab === "" ? "header-nav-link-active" : ""
        }`}
        to="/"
      >
        Home
      </Link>
      <Link
        className={`header-nav-link ${
          activeTab === "launch" ? "header-nav-link-active" : ""
        }`}
        to="/launch"
      >
        Upcoming Launches
      </Link>
      <Link
        className={`header-nav-link ${
          activeTab === "iss" ? "header-nav-link-active" : ""
        }`}
        to="/iss"
      >
        ISS
      </Link>
      <Link
        className={`header-nav-link ${
          activeTab === "nasa" ? "header-nav-link-active" : ""
        }`}
        to="/nasa"
      >
        NASA
      </Link>
    </nav>
  );
};

export default Header;
