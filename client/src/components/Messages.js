import React from "react";

import { useSelector } from "react-redux";

import "./Messages.css";

const Message = ({ message }) => {
  return (
    <div className="message">
      <div className="message__avatar">
        <i className="fas fa-user-circle"></i>
      </div>
      <div>
        <div className="message__header">
            <span className="message__username">{message.user.username}</span>
            <span className="message__timestamp">{message.createdAt}</span>
        </div>
        <div className="message__content">{message.content}</div>
      </div>
    </div>
  );
};

const Messages = () => {
  const messages = useSelector((state) => state.chat.messages);

  return (
    <div id="messages" className="messages scrollable">
      {messages.allIds.length
        ? messages.allIds.map((id) => <Message key={id} message={messages.byId[id]} />)
        : "No message."
      }
    </div>
  );
};

export default Messages;
