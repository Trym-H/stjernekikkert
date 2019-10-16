import React from "react";
import "./launch-details.styles.scss";
import {
  getStatus,
  dateTimeProbability
} from "../launch-details/launch-details.utils";

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
      <p className="details-rocket-name">{name}</p>
      <p>
        Launch Status:{" "}
        <span className={`${"statusColor" + getStatus(status)}`}>
          {getStatus(status)}
        </span>
      </p>
      <div className="details-rel-container">
        <p className="details-rel-para">
          Reliability of launch-date:{" "}
          <span className={`${"statusColor" + dateTimeProbability(tbddate)}`}>
            {dateTimeProbability(tbddate)}
          </span>
        </p>
        <p className="details-rel-para">
          Reliability of launch-time:{" "}
          <span className={`${"statusColor" + dateTimeProbability(tbdtime)}`}>
            {dateTimeProbability(tbdtime)}
          </span>
        </p>
      </div>
      {!infoURLs.length < 0 ? <p>More info: </p> : ""}
      {!vidURLs.length < 0 ? <p>Video links: </p> : ""}

      <div>
        <p>Rocket:</p>
        <p>Agency / Agencies: </p>
        <p></p>
      </div>
    </div>
  );
};

export default LaunchDetails;
