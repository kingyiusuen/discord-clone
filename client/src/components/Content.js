import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { setActiveChannel } from "../actions";
import ContentHeader from "./ContentHeader";
import Messages from "./Messages";
import TextArea from "./TextArea";

const Content = () => {
  const params = useParams();
  const activeChannel = params.channel;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setActiveChannel(activeChannel));
  })

  return (
    <div className="content">
      <ContentHeader channel={activeChannel} />
      <Messages />
      <TextArea />
    </div>
  )
}

export default Content;