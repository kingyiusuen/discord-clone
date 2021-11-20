import React from "react";

import { Link } from "react-router-dom";

import "./ContentHeader.css";

const ContentHeader = ({ channel }) => {
  return (
    <div className="content__header">
      <div className="content__title disable-select">
        <i class="fas fa-hashtag"></i>
        <h3>{channel}</h3>
      </div>
      <Link to="/logout"><i class="fas fa-sign-out-alt"></i></Link>
    </div>
  );
};

export default ContentHeader;
