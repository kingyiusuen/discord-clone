import React from "react";

import TagIcon from "@mui/icons-material/Tag";

import "./ChannelList.css";

const ChannelListItem = ({ name }) => {
  return (
    <div className="channel-list-item">
      <div className="channel-list-item__hashtag">
        <TagIcon />
      </div>
      <div className="channel-list-item__text disable-select">
        <span>{name}</span>
      </div>
    </div>
  );
};

const ChannelList = ({ names }) => {
  return (
    <div className="channel-list scrollable">
      {names.map((name, index) => (
        <ChannelListItem key={index} name={name} />
      ))}
    </div>
  );
};

export default ChannelList;
