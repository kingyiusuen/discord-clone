import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import "./Dashboard.css";
import { changeActiveChannel } from "../actions";
import ContentHeader from "./ContentHeader";
import Messages from "./Messages";
import TextArea from "./TextArea";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const params = useParams();
  const activeChannel = params.channel;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeActiveChannel(activeChannel));
  })
 
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <ContentHeader channel={activeChannel} />
        <Messages />
        <TextArea channel={activeChannel} />
      </div>
    </div>
  )
}

export default Dashboard;