import React from 'react';

import styled from "styled-components";

import WriteArea from "./WriteArea";
import Messages from "./Messages";

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: calc(100vh - 48px);
`

const ChatArea = () => {
  return (
    <Container>
      <Messages />
      <WriteArea />
    </Container>
  )
}

export default ChatArea
