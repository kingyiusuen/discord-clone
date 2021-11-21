import React from "react";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import "./Content.css";
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

  return (
    <div className="content">
      <div className="content__header">
        <div className="content__title disable-select">
          <i className="fas fa-hashtag"></i>
          <h3>{channelName}</h3>
        </div>
        <Link to="/logout"><i className="fas fa-sign-out-alt"></i></Link>
      </div>
      <Messages />
      <div className="content__textarea">
        <form onSubmit={handleOnSubmit}>
          <input type="text" name="content" placeholder={`Message #${channelName}`} />
          <button type="submit" />
        </form>
      </div>
    </div>
  )
}

export default Content
