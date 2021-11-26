import React from "react";

import styled from "styled-components";

import Avatar, { Wrapper as AvatarWrapper } from "./shared/Avatar";

const Container = styled.div`
  display: flex;
  margin: 8px 0;
  padding: 8px 16px 12px 0;

  &:hover {
    background-color: #32353a;
  }

  ${AvatarWrapper} {
    font-size: 27px;
    padding: 7px;
    margin: 0 16px;
  }
`

const Div = styled.div``

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
  const reformatTimestamp = (timestamp) => {
    // Timestamp from PostgreSQL looks something like 2021-11-25T17:56:04.726Z
    let [date, time] = timestamp.split("T");
    const [year, month, day] = date.split("-");
    time = time.split(".")[0];
    return `${month}-${day}-${year} ${time}`;
  }

  return (
    <Container>
      <Avatar backgroundColor={message.user.avatarColor} />
      <Div>
        <Header>
          <Username>{message.user.username}</Username>
          <Timestamp>{reformatTimestamp(message.createdAt)}</Timestamp>
        </Header>
        <Content>{message.content}</Content>
      </Div>
    </Container>
  )
}

export default Message;