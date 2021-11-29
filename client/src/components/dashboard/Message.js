import React from "react";

import styled from "styled-components";
import { format } from "timeago.js";

import Avatar from "./Avatar";

const Container = styled.div`
  display: flex;
  margin: 8px 0;
  padding: 8px 16px 12px 0;

  &:hover {
    background-color: #32353a;
  }
`;

const AvatarWrapper = styled.div`
  margin: 0 16px;

  &:hover {
    cursor: pointer;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 4px;
`;

const Username = styled.a`
  color: var(--header-primary);
  font-size: 14px;
  font-weight: 500;
  margin-right: 8px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Timestamp = styled.div`
  color: var(--text-muted);
  font-size: 12px;
  cursor: default;
`;

const Content = styled.div`
  color: var(--text-normal);
  font-size: 14px;
`;

const Message = ({ message, handleClick }) => {
  return (
    <Container>
      <AvatarWrapper onClick={handleClick}>
        <Avatar size="27px" w="40px" bgColor={message.user.avatarColor} />
      </AvatarWrapper>
      <div>
        <Header>
          <Username onClick={handleClick}>{message.user.username}</Username>
          <Timestamp>{format(message.createdAt)}</Timestamp>
        </Header>
        <Content>{message.content}</Content>
      </div>
    </Container>
  );
};

export default Message;
