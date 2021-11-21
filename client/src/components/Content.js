import React, { useState } from "react";

import { useDispatch } from "react-redux";

import "./Content.css";
import UserList from "./UserList";
import Messages from "./Messages";
import { sendMessage } from "../actions/chat";

const Content = ({ user, activeChannel }) => {
  const dispatch = useDispatch();
  const channelName = activeChannel && activeChannel.name;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const content = event.target.content.value;
    dispatch(sendMessage({ user, content, channelId: activeChannel.id }));
    event.target.reset();
  }
  
  const [showUserList, setShowUserList] = useState(true)
  const toggleUserList = () => {
    setShowUserList(!showUserList)
  }

  return (
    <div className="content">
      <div className="content__header">
        <div className="content__title disable-select">
          <i className="fas fa-hashtag"></i>
          <h3>{channelName}</h3>
        </div>
        <div className="content__icon-group">
          <i
            className={`fas fa-user-friends ${showUserList ? "interactive-icon--active" : "interactive-icon"}`}
            onClick={toggleUserList}
          >
          </i>
          <i className="fas fa-sign-out-alt interactive-icon"></i>
        </div>
      </div>
      <div className="tmp">
        <div className="content__chat-area">
          <Messages />
          <div className="content__textarea">
            <form onSubmit={handleOnSubmit}>
              <input type="text" name="content" placeholder={`Message #${channelName}`} />
              <button type="submit" />
            </form>
          </div>
        </div>
        {showUserList && <UserList />}
      </div>
    </div>
  )
}

export default Content
