import React from "react";
import "./launch-details.styles.scss";
import LaunchDetailsBasics from "../launch-details-basics/launch-details-basics.component";

const LaunchDetails = props => {
  console.log(props.launch);
  const { launch } = props;
  const {
    id,
    failreason,
    holdreason,
    infoURLs,
    location,
    lsp,
    missions,
    name,
    rocket,
    status,
    tbddate,
    tbdtime,
    vidURLs
  } = launch;

  return (
    <div className="launch-details-container">
      <LaunchDetailsBasics
        basics={{
          failreason,
          holdreason,
          infoURLs,
          name,
          status,
          tbddate,
          tbdtime,
          vidURLs,
          rocket
        }}
      />
      <div>
        <div>
          <p>Rocket:</p>
          <div>
            Agency / Agencies:
            {rocket.agencies ? (
              rocket.agencies.map(agency => (
                <a
                  target="_blanc"
                  rel="noopener noreferrer"
                  href={agency.wikiURL}
                  key={agency.id}
                >
                  {agency.name}
                </a>
              ))
            ) : (
              <p>No agencies listed</p>
            )}
          </div>
          <p>
            {" "}
            <a href={rocket.wikiURL}>{}</a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LaunchDetails;
