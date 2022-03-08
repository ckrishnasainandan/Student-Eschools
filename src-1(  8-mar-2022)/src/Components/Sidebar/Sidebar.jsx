import React from "react";
import "./sidebar.css";
import SidebarOption from "./SidebarOption/SidebarOption";
import { Routes, Link } from "react-router-dom";
function Sidebar() {
  const sidebarOptions = [
    {
      name: "User Profile",
      route: "user-profile",
    },
    {
      name: "Library",
      route: "library",
    },
    {
      name: "Assessment",
      route: "assessment",
    },
    {
      name: "Live Classes",
      route: "live-classes",
    },
    {
      name: "Discussion Forum",
      route: "discussion-forum",
    },
    {
      name: "Calender",
      route: "calender",
    },
    {
      name: "Reports",
      route: "reports",
    },
    {
      name: "Fee Collection",
      route: "fee-collection",
    },
    {
      name: "Documents",
      route: "documents",
    },
    {
      name: "Notices",
      route: "notices",
    },
  ];

  return (
    <div className="Sidebar">
      <div className="logo">
        <Link to="/">
          <img src="./Images/logo.png" alt="" />
        </Link>
      </div>
      <div className="sidebar-options">
        {sidebarOptions.map((_option) => (
          <Link to={_option.route}>
            <SidebarOption option={_option.name} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
