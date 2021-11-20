import React from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import "./Sidebar.css";
import ChannelList from "./ChannelList";

const SidebarHeader = () => {
  return (
    <div className="sidebar-header">
      <h3>Discord Clone</h3>
    </div>
  );
};

const SidebarFooter = () => {
  return (
    <div className="sidebar-footer">
      <div className="sidebar-footer__avatar-icon">
        <AccountCircleIcon />
      </div>
      <div className="sidebar-footer__username">
        <div>John Doe</div>
      </div>
    </div>
  );
};

const Sidebar = () => {
  const channels = [
    "announcement",
    "general",
    "introduce-yourself",
    "data-structures",
    "machine-learning",
    "computer-vision",
    "natural-language-processing",
    "reinforcement-learning",
    "computer-security",
    "functional-programming",
    "operating-systems",
    "database-systems",
    "distributed-systems",
    "computer-architecture",
    "computer-networks",
    "computer-graphics",
    "software-engineering",
    "linear-algebra",
    "calculus",
    "discrete-math",
    "statistics",
  ];

  return (
    <div className="sidebar disable-select">
      <SidebarHeader />
      <ChannelList channels={channels} />
      <SidebarFooter />
    </div>
  );
};

export default Sidebar;
