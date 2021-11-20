import React from "react";

import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import TagIcon from "@mui/icons-material/Tag";

import "./ContentHeader.css";

const ChannelName = ({ channel }) => {
  return (
    <div className="channel-name">
      <div className="channel-name__hashtag">
        <TagIcon />
      </div>
      <div className="channel-name__text disable-select">
        <h3>{channel}</h3>
      </div>
    </div>
  );
};

const SearchBox = () => {
  return (
    <div className="search-box">
      <div className="search-box__input">
        <input type="text" placeholder="Search"></input>
      </div>
      <div className="search-box__search-icon">
        <SearchIcon />
      </div>
    </div>
  );
};

const Toolbar = () => {
  return (
    <div className="toolbar">
      <SearchBox />
      <div className="toolbar__logout-icon">
        <LogoutIcon />
      </div>
    </div>
  );
};

const ContentHeader = ({ channel }) => {
  return (
    <div className="content-header">
      <ChannelName channel={channel} />
      <Toolbar />
    </div>
  );
};

export default ContentHeader;
