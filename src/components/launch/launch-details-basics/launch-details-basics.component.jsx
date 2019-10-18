import React from "react";
import "./launch-details-basics.styles.scss";

import {
  getStatus,
  dateTimeProbability
} from "../launch-details/launch-details.utils";

const LaunchDetailsBasics = props => {
  console.log(props);

  const infoURLs = [
    "https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets",
    "https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets",
    "https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets"
  ];
  const vidURLs = [
    "https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets",
    "https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets"
  ];

  const failreason = "MISSION FAILED; WE'LL GET EM NEXT TIME";
  const holdreason = "TEXAS HOLDAN";

  const {
    // failreason,
    // holdreason,
    // infoURLs,
    name,
    status,
    tbddate,
    tbdtime,
    // vidURLs,
    rocket
  } = props.basics;
  return (
    <div className="ld-basics-container">
      <h1 className="basics-heading">BASICS:</h1>
      <p className="basics-rocket-name">
        Name of Rocket | Payload:{" "}
        <a href={rocket.wikiURL} target="_blanc" rel="noopener noreferrer">
          {name}
        </a>{" "}
      </p>
      <div className="basics-status-container">
        <p className="basics-status-para">
          Launch Status:{" "}
          <span className={`${"statusColor" + getStatus(status)}`}>
            {getStatus(status)}
          </span>
        </p>
        <div className="basics-rel-container">
          Reliability of launch{" "}
          <span className="basics-time-date">time/date:</span>{" "}
          <span className={`${"statusColor" + dateTimeProbability(tbddate)}`}>
            {dateTimeProbability(tbddate)}
          </span>{" "}
          /{" "}
          <span className={`${"statusColor" + dateTimeProbability(tbdtime)}`}>
            {dateTimeProbability(tbdtime)}
          </span>
        </div>
      </div>
      <div className="basics-reasons-container">
        {holdreason ? (
          <p className="basics-reasons">
            Reasons for holding:{" "}
            <span className="holding-reason">{holdreason}</span>
          </p>
        ) : (
          ""
        )}
        {failreason ? (
          <p className="basics-reasons">
            Reasons for failure:{" "}
            <span className="failure-reason">{failreason}</span>
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="basics-links-container">
        {infoURLs.length ? (
          <div className="basics-links-section">
            <p>More info: </p>{" "}
            {infoURLs.map((infoURL, index) => (
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
        {vidURLs.length ? (
          <div className="basics-links-section">
            <p>Video links: </p>{" "}
            {vidURLs.map((vidURL, index) => (
              <p key={index}>
                <a href={vidURL} target="_blanc" rel="noopener noreferrer">
                  Video-source {index + 1}
                </a>
              </p>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default LaunchDetailsBasics;
