import React from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import "./Messages.css";

const Message = () => {
  return (
    <div className="message">
      <div className="message__avatar">
        <AccountCircleIcon />
      </div>
      <div>
        <div className="message__header">
          <h2>
            <span className="message__username">ZumdEworld</span>
            <span className="message__timestamp">11/10/2021 11:39am</span>
          </h2>
        </div>
        <div className="message__content">
          I would agree about the slanted text feeling ‘off’. I would agree
          about the slanted text feeling ‘off’. Small bits of it as a header or
          something could work, but straight text with the background still
          being rotated seems like it would feel more interesting.
        </div>
      </div>
    </div>
  );
};

const Messages = () => {
  return (
    <div className="messages scrollable">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default Messages;
