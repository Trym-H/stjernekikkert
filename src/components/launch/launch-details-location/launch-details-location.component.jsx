import React from "react";
import "./launch-details-location.styles.scss";
import LaunchPads from "../launch-pads/launch-pads.component";

const LaunchDetailsLocation = props => {
  return (
    <div className="ld-location-container">
      <h1 className="location-heading">LOCATION:</h1>
      <p className="location-name-container">
        <span className="location-cc">({props.location.countryCode})</span> -{" "}
        <span className="location-name">{props.location.name}</span>
      </p>
      <LaunchPads padId={props.location.pads[0].id} />
    </div>
  );
};

export default LaunchDetailsLocation;
