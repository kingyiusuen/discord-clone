import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./Sidebar.css";
import { useActiveChannel } from "../hooks";

const ChannelListItem = ({ channel, isActive }) => {
  return (
    <Link to={`/channel/${channel.id}`}>
      <div className={
        `channel-list-item ${isActive ? "channel-list-item--active" : ""}`
      }>
        <i className="fas fa-hashtag"></i>
        <span className="channel-list-item__text disable-select">{channel.name}</span>
      </div>
    </Link>
  );
};

const Sidebar = () => {
  const user = useSelector(state => state.session.user);
  const channels = useSelector((state) => state.chat.channels);
  const activeChannel = useActiveChannel();

  return (
    <div className="sidebar disable-select">
      <div className="sidebar__header">
      <h3><a href="/">Discord Clone</a></h3>
      </div>
      <div className="sidebar__list scrollable">
        {channels && channels.allIds.map((id) => (
          <ChannelListItem
            key={id}
            channel={channels.byId[id]}
            isActive={id === activeChannel.id}
          />
        ))}
      </div>
      <div className="sidebar__footer">
        <i className="fas fa-user-circle"></i>
        <div className="sidebar__username">
          <div>{user && user.username}</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
