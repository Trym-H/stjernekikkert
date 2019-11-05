import React, { useEffect, useState } from "react";
import "./launch.styles.scss";

import LaunchList from "./launch-list-item/launch-list-item.component";
import LaunchDetails from "./launch-details/launch-details.component";

const Launch = () => {
  const [launchData, setLaunchData] = useState({
    launches: [],
    isLoading: false
  });

  const [agenciesLSP, setAgenciesLSP] = useState([]);

  const [selectedLaunch, setSelectedLaunch] = useState({});

  const [isLocal, setIsLocal] = useState(false);
  const [launchSelected, setLaunchSelected] = useState(false);

  // fetch next 5 launches
  useEffect(() => {
    const fetchLaunch = async () => {
      try {
        setLaunchData({ isLoading: true });
        const response = await fetch(
          "https://launchlibrary.net/1.4/launch/next/5"
        );
        const resJson = await response.json();
        setLaunchData({ launches: resJson.launches, isLoading: false });
      } catch (err) {
        console.log(err);
      }
    };

    fetchLaunch();
  }, []);

  const handleClick = launch => {
    setLaunchSelected(true);
    setSelectedLaunch(launch);
  };

  return (
    <div className="launch-container">
      <div className="launch-overhead">
        <div className="launch-image-container">
          <div className="background-image"></div>
        </div>
        <div className="launch-list-container">
          <div className="launch-table-head">
            <p className="table-head-name">Name:</p>
            <div className="table-head-lw">
              <p className="table-head-lw-para">Launch window:</p>
              <div className="timezone-buttons-container">
                <div
                  className={`timezone-button ${
                    !isLocal ? "timezone-button-active" : ""
                  }`}
                  onClick={() => {
                    setIsLocal(false);
                  }}
                >
                  UTC
                </div>
                <div
                  className={`timezone-button ${
                    isLocal ? "timezone-button-active" : ""
                  }`}
                  onClick={() => {
                    setIsLocal(true);
                  }}
                >
                  Local
                </div>
              </div>
            </div>
          </div>
          {launchData.isLoading ? (
            <p style={{ color: "white", marginLeft: "20px" }}>loading ...</p>
          ) : (
            launchData.launches.map(launch => (
              <LaunchList
                key={launch.id}
                launch={launch}
                isLocal={isLocal}
                handleClick={handleClick}
              />
            ))
          )}
        </div>
      </div>
      <div className="details-container">
        {" "}
        {launchSelected ? (
          <LaunchDetails launch={selectedLaunch} />
        ) : (
          <p>CLICK ON A NAME ...</p>
        )}
      </div>
    </div>
  );
};

export default Launch;
