import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import "./Messages.css";
import { loadMessages } from "../reducers/chatReducer";

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

const Messages = ({ activeChannel }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMessages(activeChannel.id));
  }, [dispatch, activeChannel])

  const messages = useSelector((state) => state.chat.messages);
  const isLoadingMessages = useSelector((state) => state.chat.isLoadingMessages);
  const hasMessages = messages.allIds.length > 0;

  // Scroll to bottom of the chat history
  let messageContainerBottomRef = document.getElementById("messagesContainerBottom");
  useEffect(() => {
    !isLoadingMessages && messageContainerBottomRef.scrollIntoView(false);
  }, [isLoadingMessages, messageContainerBottomRef]);

  return (
    <div className="messages scrollable">
      {
        !isLoadingMessages &&
        <div id="messagesContainer" className="messages__container">
          <div className="messages__header disable-select">
            <h1>Welcome to #{activeChannel.name}!</h1>
            <h2>This is the start of #{activeChannel.name}.</h2>
            {hasMessages && <hr />}
          </div>
          {hasMessages && (messages.allIds.map((id) => <Message key={id} message={messages.byId[id]} />))}
        </div>
      }
      <div
        ref={element => (messageContainerBottomRef = element)}
        id="messagesContainerBottom"
      >
      </div>
    </div>
  );
};

export default Messages;
