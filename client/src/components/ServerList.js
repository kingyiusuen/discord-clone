import React from 'react';

import styled, { css } from 'styled-components';

import Avatar from "./shared/Avatar";
import { Wrapper as DiscordIconWrapper } from "./shared/Avatar";

const Container = styled.div`
  background-color: var(--background-tertiary);
  width: 72px;
  overflow: hidden;
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${DiscordIconWrapper} {
    font-size: 28px;
    height: 48px;
    width: 48px;
    border-radius: 50%;

    &:hover {
      border-radius: 16px;
    }

    ${p => p.isActive && css`
      border-radius: 16px;
      &:hover {
        border-radius: 16px;
      }
    `}
  }
`

const ServerList = () => {
  return (
    <Container>
      <Avatar />
    </Container>
  )
}

export default ServerList;
