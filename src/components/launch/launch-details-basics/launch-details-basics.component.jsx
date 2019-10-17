import React from "react";
import "./launch-details-basics.styles.scss";

import {
  getStatus,
  dateTimeProbability
} from "../launch-details/launch-details.utils";

const LaunchDetailsBasics = props => {
  console.log(props);
  const {
    failreason,
    holdreason,
    infoURLs,
    name,
    status,
    tbddate,
    tbdtime,
    vidURLs,
    rocket
  } = props.basics;
  return (
    <div className="launch-details-basics-container">
      <p className="details-rocket-name">
        <a href={rocket.wikiURL} target="_blanc" rel="noopener noreferrer">
          {name}
        </a>{" "}
      </p>
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
      {!infoURLs.length < 0 ? (
        <div>
          <p>More info: </p>{" "}
          {infoURLs.map((infoURL, index) => (
            <a href={infoURL} target="_blanc" rel="noopener noreferrer">
              Info Source {index}
            </a>
          ))}
        </div>
      ) : (
        ""
      )}
      {!vidURLs.length < 0 ? (
        <div>
          <p>Video links: </p>{" "}
          {vidURLs.map((vidURL, index) => (
            <a href={vidURL} target="_blanc" rel="noopener noreferrer">
              Video Source {index}
            </a>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default LaunchDetailsBasics;
