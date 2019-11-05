import React, { useState, useEffect } from "react";
import "./launch-details-agencies.styles.scss";

const Agency = props => {
  const [agency, setAgency] = useState({});
  const [agencyLoaded, setAgencyLoaded] = useState(false);
  const [agencyType, setAgencyType] = useState("");

  useEffect(() => {
    const fetchAgency = async () => {
      try {
        const response = await fetch(
          "https://launchlibrary.net/1.4/agency/" + props.agencyId
        );
        const resJson = await response.json();
        setAgency(resJson);
        setAgencyLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAgency();
  }, [props.agencyId]);

  useEffect(() => {
    if (Object.entries(agency).length !== 0) {
      const fetchAgencyType = async () => {
        try {
          const response = await fetch(
            "https://launchlibrary.net/1.4/agencytype/" +
              agency.agencies[0].type
          );
          const resJson = await response.json();
          setAgencyType(resJson);
        } catch (err) {
          console.log(err);
        }
      };
      fetchAgencyType();
    }
  }, [agencyLoaded]);

  return (
    <div className="agencies-container">
      {agencyLoaded ? (
        <div>
          <div className="agency-basic-info-container">
            <p>
              <a href={agency.agencies[0].wikiURL}>{agency.agencies[0].name}</a>{" "}
              (
              <span className="agencies-abbrev">
                {agency.agencies[0].abbrev}
              </span>
              )
            </p>
            -
            <p>
              Country code:{" "}
              <span className="agency-cc-span">
                {agency.agencies[0].countryCode}
              </span>
            </p>
          </div>
          <div className="agency-intent-container">
            <div className="agency-types-container">
              <p>Agency Types: </p>{" "}
              {agencyType ? (
                <div>
                  {agencyType.types.map(agencyType => (
                    <span className="agency-type" key={agencyType}>
                      {agencyType.name}
                    </span>
                  ))}{" "}
                </div>
              ) : (
                <span>Loading agency type ... </span>
              )}
            </div>
            <p className="agency-lsp">
              Is this agency a launch service provider:{" "}
              {agency.agencies[0].islsp ? (
                <span className="agency-green-span">Yes</span>
              ) : (
                <span className="agency-red-span">No</span>
              )}
            </p>
          </div>
          {agency.agencies[0].infoURLs.length ? (
            <div className="agency-info-links-container">
              <div className="agency-links-section">
                <p>More info: </p>{" "}
                {agency.agencies[0].infoURLs.map((infoURL, index) => (
                  <p key={index}>
                    <a href={infoURL} target="_blanc" rel="noopener noreferrer">
                      Info-source {index + 1}
                    </a>
                  </p>
                ))}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div>Loading agencies ...</div>
      )}
    </div>
  );
};

export default Agency;
