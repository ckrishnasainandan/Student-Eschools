import React from "react";
import "./sidebarOption.css";

function SidebarOption(props) {
  return (
    <div className="sidebarOption">
      <p>{props.option}</p>
    </div>
  );
}

export default SidebarOption;
