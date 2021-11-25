import React, { useEffect } from 'react';

import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import Message from "./Message";
import Divider from "./shared/Divider";
import { useGetActiveChannelId } from "../hooks";
import { loadMessages } from "../reducers/chatReducer";

const Wrapper = styled.div`
  background-color: var(--background-primary);
  display: flex;
  flex: 1;
  overflow: hidden scroll;
  height: calc(100vh - 48px - 68px);
width: 100%;
`

const Container = styled.div`
  margin-top: auto;
`

const HeaderContainer = styled.div`
  margin: 4px 16px;
`

const PrimaryHeader = styled.h1`
  color: var(--header-primary);
  margin-top: 12px;
  margin-bottom: 4px;
`

const SecondaryHeader = styled.h2`
  color: var(--header-secondary);
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 400;
`

const ContainerBottom = styled.div``

const Messages = () => {
  const dispatch = useDispatch();
  const activeChannelId = useGetActiveChannelId();
  useEffect(() => {
    dispatch(loadMessages(activeChannelId));
  }, [activeChannelId, dispatch])

  const channels = useSelector(state => state.chat.channels);
  const activeChannelName = !channels.isLoading && channels.byId[activeChannelId].name;
  
  const messages = useSelector((state) => state.chat.messages);
  const hasMessages = messages.allIds.length > 0;

  // Scroll to bottom of the chat history
  let containerBottomRef = document.getElementById("messagesContainerBottom");
  useEffect(() => {
    !messages.isLoading && containerBottomRef.scrollIntoView(false);
  }, [messages.isLoading, containerBottomRef]);
  
  return (
    <Wrapper className="scrollable">
      <Container>
        <HeaderContainer className="disable-select">
          <PrimaryHeader>Welcome #{activeChannelName}!</PrimaryHeader>
          <SecondaryHeader>This is the start of #{activeChannelName}.</SecondaryHeader>
          {hasMessages && <Divider />}
        </HeaderContainer>
        {
          hasMessages && messages.allIds.map((id) => (
            <Message
              key={id}
              message={messages.byId[id]}
            />
          ))
        }
      <ContainerBottom
        ref={element => (containerBottomRef = element)}
        id="messagesContainerBottom"
      >
      </ContainerBottom>
      </Container>
    </Wrapper>
  )
}

export default Messages;
