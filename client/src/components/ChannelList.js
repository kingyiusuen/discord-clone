import React from "react";

import TagIcon from "@mui/icons-material/Tag";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./ChannelList.css";

const ChannelListItem = ({ channel, isActive }) => {
  return (
    <div
      className={`channel-list-item ${isActive ? "channel-list-item--active" : ""}`}
    >
      <div className="channel-list-item__hashtag">
        <TagIcon />
      </div>
      <div className="channel-list-item__text disable-select">
        <span>{channel}</span>
      </div>
    </div>
  );
};

const ChannelList = ({ channels }) => {
  const activeChannel = useSelector(state => state.activeChannel);

  return (
    <div className="channel-list scrollable">
      {channels.map((channel) => (
        <Link to={`${channel}`} key={channel}>
          <ChannelListItem
            channel={channel}
            isActive={channel === activeChannel}
          />
        </Link>
      ))}
    </div>
  );
};

export default ChannelList;
