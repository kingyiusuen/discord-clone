import React, { useState } from "react";

import { useDispatch } from "react-redux";

import "./Content.css";
import UserList from "./UserList";
import Messages from "./Messages";
import { useActiveChannel } from "../hooks";
import { logout } from "../reducers/sessionReducer";
import { sendMessage } from "../reducers/chatReducer";

const Content = ({ user }) => {
  const dispatch = useDispatch();
  const activeChannel = useActiveChannel();

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
          <h3>{activeChannel && activeChannel.name}</h3>
        </div>
        <div className="content__icon-group">
          <a href="https://github.com/kingyiusuen/discord-clone" target="blank">
            <i class="fab fa-github interactive-icon"></i>
          </a>
          <i
            className={
              `fas fa-user-friends interactive-icon${showUserList ? "--active" : ""}`
            }
            onClick={toggleUserList}
          >
          </i>
          <i
            className="fas fa-sign-out-alt interactive-icon"
            onClick={() => dispatch(logout())}
          >
          </i>
        </div>
      </div>
      <div className="chat-area">
        <div className="chat-area__container">
          {activeChannel && <Messages activeChannel={activeChannel} />}
          <div className="chat-area__form">
            <form onSubmit={handleOnSubmit}>
              <input
                type="text"
                name="content"
                placeholder={`Message #${activeChannel && activeChannel.name}`}
              />
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
