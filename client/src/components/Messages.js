import React from "react";

import { useSelector } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import "./Messages.css";

const Message = ({ username, createdAt, content }) => {
  return (
    <div className="message">
      <div className="message__avatar">
        <AccountCircleIcon />
      </div>
      <div>
        <div className="message__header">
          <h2>
            <span className="message__username">{username}</span>
            <span className="message__timestamp">{createdAt}</span>
          </h2>
        </div>
        <div className="message__content">{content}</div>
      </div>
    </div>
  );
};

const Messages = () => {
  const messages = useSelector((state) => state.chat.messages);

  return (
    <div id="messages" className="messages scrollable">
      {messages.length
        ? messages.map((message, index) => <Message key={index} {...message} />)
        : "No message."
      }
    </div>
  );
};

export default Messages;
