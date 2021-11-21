import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "./Dashboard.css";
import { setActiveChannel, getChannels } from "../actions/chat";
import Content from "./Content";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const params = useParams();
  const activeChannelId = parseInt(params.channel);
  const user = useSelector(state => state.auth.user);

  const dispatch = useDispatch();

  // The list of channels is fetched from server only once
  useEffect(() => {
    dispatch(getChannels());
  }, [dispatch])

  useEffect(() => {
    dispatch(setActiveChannel(activeChannelId));
  }, [dispatch, activeChannelId])

  const channels = useSelector((state) => state.chat.channels);
  const activeChannel = channels.byId[activeChannelId];

  return (
    <div className="dashboard">
      <Sidebar user={user} activeChannel={activeChannel} channels={channels} />
      <Content user={user} activeChannel={activeChannel} />
    </div>
  )
}

export default Dashboard;