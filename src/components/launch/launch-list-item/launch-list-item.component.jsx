import React from "react";
import "./launch-list-item.styles.scss";

import { formatDate } from "../launch.utils";

const LaunchList = props => {
  return (
    <div className="launch-list-item-container">
      <div className="ll-name-section">
        <p>{props.launch.name}</p>
      </div>
      <div className="ll-window-section">
        <p>
          <span className="ll-windowstart-span">
            {formatDate({
              date: props.launch.windowstart,
              isLocal: props.isLocal
            })}
          </span>{" "}
          <span className="ll-dash-span">&#10148;</span>{" "}
          <span className="ll-windowend-span">
            {formatDate({
              date: props.launch.windowend,
              isLocal: props.isLocal
            })}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LaunchList;
