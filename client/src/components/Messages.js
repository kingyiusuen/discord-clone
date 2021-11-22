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
            <span className="message__timestamp">{message.createdAt.substring(0, 10)}</span>
        </div>
        <div className="message__content">{message.content}</div>
      </div>
    </div>
  );
};

const Messages = ({ channelName }) => {
  const messages = useSelector((state) => state.chat.messages);

  return (
    <div id="messages" className="messages scrollable">
      <div className="messages__container">
        <div className="messages__header disable-select">
          <h1>Welcome to #{channelName}!</h1>
          <h2>This is the start of #{channelName}.</h2>
          {messages.allIds.length > 0 && <hr />}
        </div>
        {messages.allIds.length > 0
          && (messages.allIds.map((id) => <Message key={id} message={messages.byId[id]} />))
        }
      </div>
    </div>
  );
};

export default Messages;
