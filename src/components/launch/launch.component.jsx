import React, { useEffect, useState } from "react";
import "./launch.styles.scss";

import LaunchList from "./launch-list-item/launch-list-item.component";
import LaunchDetails from "./launch-details/launch-details.component";

const Launch = () => {
  const [launchData, setLaunchData] = useState({
    launches: [],
    isLoading: false
  });
  const [fetchUrl, setFetchUrl] = useState(
    "https://launchlibrary.net/1.3/launch/next/5"
  );

  const [isLocal, setIsLocal] = useState(false);
  const [launchSelected, setLaunchSelected] = useState(true);

  useEffect(() => {
    const fetchLaunch = async () => {
      try {
        setLaunchData({ isLoading: true });
        const response = await fetch(fetchUrl);
        const resJson = await response.json();
        setLaunchData({ launches: resJson.launches, isLoading: false });
      } catch (err) {
        console.log(err);
      }
    };

    fetchLaunch();
  }, []);

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
              <LaunchList key={launch.id} launch={launch} isLocal={isLocal} />
            ))
          )}
        </div>
      </div>
      <div className="details-container">
        {" "}
        {launchSelected ? <LaunchDetails /> : <p>CLICK ON A NAME ...</p>}
      </div>
    </div>
  );
};

export default Launch;
