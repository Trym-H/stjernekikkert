import React, { useState, useEffect } from "react";
import "./launch-pads.styles.scss";

import Agency from "../launch-details-agencies/launch-details-agencies.component";

const LaunchPads = props => {
  const [pad, setPad] = useState({});

  useEffect(() => {
    const fetchPad = async () => {
      try {
        var response = await fetch(
          "https://launchlibrary.net/1.4/pad/" + props.padId
        );
        var respJson = await response.json();
        setPad(respJson.pads[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPad();
  }, [props.padId]);

  return (
    <div>
      <div className="launch-pads-container">
        <p>
          {pad.wikiURL ? (
            <a href={pad.wikiURL} target="_blanc">
              {pad.name}
            </a>
          ) : (
            <span>{pad.name}</span>
          )}
        </p>
        <p>
          Launch or Landing pad:{" "}
          <span className="launch-or-landing-span">
            {pad.padType === 0 ? "Launch" : "Landing"}
          </span>
        </p>
        <p>
          {pad.mapURL ? (
            <a href={pad.mapURL} target="_blanc">
              Link to map
            </a>
          ) : (
            ""
          )}
        </p>
      </div>
      {pad.agencies ? (
        <div>
          <p className="pad-agency-heading">AGENCIES BEHIND PAD: </p>
          {pad.agencies.map(agency => (
            <div key={agency.id}>
              <Agency agencyId={agency.id} />
              <div className="agency-divider"></div>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default LaunchPads;
