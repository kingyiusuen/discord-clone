import React from "react";

import "./Sidebar.css";
import ChannelList from "./ChannelList";

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
      <div className="sidebar__header">
        <h3>Discord Clone</h3>
      </div>
      <ChannelList channels={channels} />
      <div className="sidebar__footer">
        <i class="fas fa-user-circle"></i>
        <div className="sidebar__username">
          <div>John Doe</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
