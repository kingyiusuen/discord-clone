import React, { useEffect, useRef } from 'react';

import { useSelector } from "react-redux";
import styled from "styled-components";

import Message from "./Message";
import Hashtag from "./shared/Hashtag";
import { useActiveChannel } from "../hooks";

const Wrapper = styled.div`
  background-color: var(--background-primary);
  display: flex;
  flex: 1;
  overflow: hidden scroll;
  height: calc(100vh - 48px - 68px);
`

const Container = styled.div`
  margin-top: auto;
  width: 100%;
`

const HeaderContainer = styled.div`
  margin: 16px 16px 4px 16px;
`

const PrimaryHeading = styled.h1`
  color: var(--header-primary);
  margin-top: 12px;
  margin-bottom: 4px;
`

const SecondaryHeading = styled.h2`
  color: var(--header-secondary);
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 400;
`

const Divider = styled.hr`
  border: 0;
  border-top: 1px solid var(--channeltextarea-background);
  width: 100%;
`

const ContainerBottom = styled.div``

const Messages = () => {
  const activeChannel = useActiveChannel();

  const messages = useSelector((state) => state.chat.messages);
  const hasMessages = messages.allIds.length > 0;

  // Scroll to bottom of the chat history whenever there is a new message
  const containerBottomRef = useRef(null);
  useEffect(() => {
    containerBottomRef.current.scrollIntoView(false);
  }, [messages.allIds, containerBottomRef]);

  return (
    <Wrapper className="scrollable">
      <Container>
        <HeaderContainer className="disable-select">
          <Hashtag size="36px" w="68px" color="white" bgColor="var(--background-accent)" />
          <PrimaryHeading>Welcome #{activeChannel.name}!</PrimaryHeading>
          <SecondaryHeading>This is the start of #{activeChannel.name}.</SecondaryHeading>
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
      <ContainerBottom ref={containerBottomRef}>
      </ContainerBottom>
      </Container>
    </Wrapper>
  )
}

export default Messages;
