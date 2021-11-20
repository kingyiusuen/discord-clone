import React from "react";

import { useDispatch } from "react-redux";

import "./TextArea.css";
import { sendMessage } from "../actions";

const TextArea = ({ channel }) => {
  const dispatch = useDispatch();
  
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const content = event.target.content.value;
    dispatch(sendMessage(content));
    event.target.reset();
  }

  return (
    <div className="textarea">
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="content" placeholder={`Message #${channel}`} />
        <button type="submit" />
      </form>
    </div>
  );
};

export default TextArea;
