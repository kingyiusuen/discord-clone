import React from 'react';

import styled, { css } from 'styled-components';
import { AiOutlineCode } from "react-icons/ai";

import Avatar from "./shared/Avatar";
import Icon, { Wrapper as IconWrapper } from "./shared/Icon";
import { Wrapper as DiscordIconWrapper } from "./shared/Avatar";
import Divider from "./shared/Divider";

const Container = styled.div`
  background-color: var(--background-tertiary);
  width: 72px;
  overflow: hidden;
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  ${IconWrapper}, ${DiscordIconWrapper} {
    font-size: 28px;
    height: 48px;
    width: 48px;
    border-radius: 50%;
    color: white;
    transition: 0.3s;

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

  ${IconWrapper} {
    background-color: #faa519;
  }

  ${DiscordIconWrapper} {
    background-color: var(--background-primary);

    &:hover {
      background-color: var(--brand);
    }
  }

  ${Divider} {
    border-top: 1px solid var(--background-modifier-accent);
    width: 32px;
  }
`

const ServerList = () => {
  return (
    <Container>
      <Avatar title="Home" />
      <Divider />
      <Icon>
        <AiOutlineCode title="Sample Server"/>
      </Icon>
    </Container>
  )
}

export default ServerList;
