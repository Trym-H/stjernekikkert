import React, { useEffect, useState } from "react";
import "./launch-details.styles.scss";
import LaunchDetailsBasics from "../launch-details-basics/launch-details-basics.component";
import LaunchDetailsRocket from "../launch-details-rocket/launch-details-rocket.component";
import LaunchDetailsLocation from "../launch-details-location/launch-details-location.component";
import { formatDefaultPads } from "../launch-details/launch-details.utils";
import LaunchDetailsMission from "../launch-details-mission/launch-details-mission.component";

const LaunchDetails = props => {
  const [pads, setPads] = useState([]);
  const [padArray, setPadArray] = useState([]);

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

  useEffect(() => {
    const fetchDefaultPads = async () => {
      try {
        const response = await fetch(
          "https://launchlibrary.net/1.4/rocket/" + rocket.id
        );
        const respJson = await response.json();
        const formatResp = formatDefaultPads(respJson.rockets[0].defaultPads);
        setPadArray(formatResp);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDefaultPads();
  }, [launch]);

  useEffect(() => {
    setPads([]);
    for (let pad of padArray) {
      const fetchPad = async () => {
        try {
          const response = await fetch(
            "https://launchlibrary.net/1.4/pad/" + pad
          );
          const resJson = await response.json();
          setPads(pads => [...pads, resJson.pads[0]]);
        } catch (err) {
          console.log(err);
        }
      };
      fetchPad();
    }
  }, [padArray]);

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
          rocket,
          lsp,
          pads
        }}
      />
      <div className="vertical-divider" />
      {rocket.agencies && !rocket.agencies.length <= 0 ? (
        <div>
          <LaunchDetailsRocket rocket={rocket} />
        </div>
      ) : (
        ""
      )}
      {rocket.agencies && !rocket.agencies.length <= 0 ? (
        <div className="vertical-divider" />
      ) : (
        ""
      )}
      <LaunchDetailsLocation location={location} />
      <div className="vertical-divider" />
      {missions.length ? <LaunchDetailsMission mission={missions} /> : ""}
    </div>
  );
};

export default LaunchDetails;
