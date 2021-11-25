import React from "react";

import styled from "styled-components";

import Avatar from "./shared/Avatar";

const Container = styled.div`
  display: flex;
  margin: 8px 0;
  padding: 8px 16px 12px 0;

  &:hover {
    background-color: #32353a;
  }
`

const Header = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 4px;
`

const Username = styled.a`
  color: var(--header-primary);
  font-size: 14px;
  font-weight: 500;
  margin-right: 8px;

  &:hover {
    text-decoration: underline;
  }
`

const Timestamp = styled.div`
  color: var(--text-muted);
  font-size: 12px;
  cursor: default;
`

const Content = styled.div`
  color: var(--text-normal);
  font-size: 14px;
`

const Message = ({ message }) => {
  return (
    <Container>
      <Avatar style={{ fontSize: "27px", padding: "7px", margin: "0 16px" }} />
      <div>
        <Header>
          <Username>{message.user.username}</Username>
          <Timestamp>{message.timestamp}</Timestamp>
        </Header>
        <Content>{message.content}</Content>
      </div>
    </Container>
  )
}

export default Message;