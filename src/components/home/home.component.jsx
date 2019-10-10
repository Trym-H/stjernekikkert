import React from "react";
import "./home.styles.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-menu">
        <div className="home-text-content">
          <h1>WELCOME TO SPACEBOIS</h1>
          <p>
            We're just experimenting with React and open APIs, don't mind us.
          </p>
          <p>Try out our features:</p>
          <div className="home-links">
            <Link className="home-nav-link" to="/launch">
              UPCOMING LAUNCHES
            </Link>
            <Link className="home-nav-link" to="/iss">
              ISS
            </Link>
            <Link className="home-nav-link" to="/nasa">
              NASA
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
