import React from "react";
import "./launch-list-item.styles.scss";

import { formatDate } from "../utils/launch.utils";

const LaunchList = props => {
  const { handleClick } = props;
  return (
    <div className="launch-list-item-container">
      <div className="ll-name-section">
        <p
          className="ll-rocket-name"
          onClick={() => {
            handleClick(props.launch);
          }}
        >
          {props.launch.name}
        </p>
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
