import React from "react";
import "./launch-details-rocket.styles.scss";

import Agency from "../launch-details-agencies/launch-details-agencies.component";

const LaunchDetailsRocket = props => {
  const { rocket } = props;

  return (
    <div className="ld-rocket-container">
      <h1 className="rocket-heading">AGENCIES BEHIND ROCKET:</h1>
      {rocket.agencies ? (
        <div>
          {" "}
          {rocket.agencies.map(rocketAgency => (
            <Agency key={rocketAgency.id} agencyId={rocketAgency.id} />
          ))}{" "}
        </div>
      ) : (
        <div>
          <p>No agencies listed</p>
        </div>
      )}
    </div>
  );
};

export default LaunchDetailsRocket;
