import React, { useEffect } from "react";
import "./launch-details-basics.styles.scss";

import Agency from "../launch-details-agencies/launch-details-agencies.component";

import {
  getStatus,
  dateTimeProbability
} from "../launch-details/launch-details.utils";

const LaunchDetailsBasics = props => {
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
    lsp,
    pads,
    rocket
  } = props.basics;

  // console.log(pads);

  return (
    <div className="ld-basics-container">
      <h1 className="basics-heading">BASICS:</h1>
      <p className="basics-rocket-name">
        Name of Rocket | Payload:{" "}
        <a href={rocket.wikiURL} target="_blanc" rel="noopener noreferrer">
          {name}
        </a>{" "}
      </p>
      {pads ? (
        <div className="launchpads-container">
          Default launch pads:
          {pads.map(pad => {
            return (
              <p key={pad.id} className="statusColorCertain">
                {pad.name}
              </p>
            );
          })}
        </div>
      ) : (
        ""
      )}
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
      <div>
        {infoURLs.length || vidURLs.length ? (
          <p className="inbetween-headings">
            More information about the launch:
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
      <div>
        <p className="inbetween-headings inb-heading-low">
          Launch service provider responsible for launch:
        </p>
        {lsp ? (
          <Agency agencyId={lsp.id} />
        ) : (
          <div>
            <p>No agencies listed</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LaunchDetailsBasics;
