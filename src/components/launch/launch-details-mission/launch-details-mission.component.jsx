import React from "react";
import "./launch-details-mission.styles.scss";

import Agency from "../launch-details-agencies/launch-details-agencies.component";

const LaunchDetailsMission = props => {
  //console.log(props);
  return (
    <div className="ld-mission-container">
      <h1 className="missions-heading">MISSIONS:</h1>
      <div className="ld-mission-basics-container">
        <p>
          Name of mission:{" "}
          {props.mission[0].wikiURL ? (
            <a href={props.mission[0].wikiURL}>{props.mission[0].name}</a>
          ) : (
            <span className="ld-mission-name-nourl">
              {props.mission[0].name}
            </span>
          )}
        </p>
        <p>
          Mission type:{" "}
          <span className="ld-missions-type">{props.mission[0].typeName}</span>
        </p>
        <p className="ld-missions-desc">{props.mission[0].description}</p>
      </div>
      <div className="missions-infolink-container">
        {props.mission[0].infoURLs ? (
          <div className="basics-links-section">
            <p>More info: </p>{" "}
            {props.mission[0].infoURLs.map((infoURL, index) => (
              <p key={index}>
                <a href={infoURL} target="_blanc" rel="noopener noreferrer">
                  Info-source {index + 1}
                </a>
              </p>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
      {props.mission[0].agencies ? (
        <div>
          <p className="missions-agency-heading">AGENCIES BEHIND MISSION: </p>
          {props.mission[0].agencies.map(agency => {
            return <Agency key={agency.id} agencyId={agency.id} />;
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default LaunchDetailsMission;
