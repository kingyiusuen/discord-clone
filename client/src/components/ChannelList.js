import React from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./ChannelList.css";

const ChannelListItem = ({ channel, isActive }) => {
  return (
    <Link to={`/${channel}`}>
      <div
        className={
          `channel-list-item ${isActive ? "channel-list-item--active" : ""}`
        }
      >
        <i class="fas fa-hashtag"></i>
        <div className="channel-list-item__text disable-select">
          <span>{channel}</span>
        </div>
      </div>
    </Link>
  );
};

const ChannelList = ({ channels }) => {
  const activeChannel = useSelector(state => state.chat.activeChannel);

  return (
    <div className="channel-list scrollable">
      {channels.map((channel) => (
        <ChannelListItem
          key={channel}
          channel={channel}
          isActive={channel === activeChannel}
        />
      ))}
    </div>
  );
};

export default ChannelList;
