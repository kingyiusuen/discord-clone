import React from "react";

import "./Dashboard.css";
import Content from "./Content";
import Sidebar from "./Sidebar";

const Dashboard = () => {

  return (
    <div className="dashboard">
      <Sidebar />
      <Content />
    </div>
  )
}

export default Dashboard;