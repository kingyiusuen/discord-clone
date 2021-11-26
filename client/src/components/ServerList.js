import React from 'react';

import styled, { css } from 'styled-components';
import { AiOutlineCode } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

import { baseIcon, roundedBackground } from "../design/mixins";

const discordIconStyle = css`
  color: ${p => p.isActive ? "white" : "var(--text-normal)"};
  background-color: ${p => p.isActive ? "var(--brand)" : "var(--background-primary)"};

  &:hover {
    background-color: var(--brand);
  }
`

const IconWrapper = styled.div`
  ${baseIcon};
  ${roundedBackground};
  transition: 0.3s;
  background-color: #faa519;

  &:hover {
    border-radius: 16px;
  }

  ${p => p.isActive && css`
    border-radius: 16px;
  `}

  ${p => p.isDiscord && discordIconStyle}
`

const ServerIcon = ({ children, ...delegated }) => {
  return (
    <IconWrapper size="28px" w="48px" color="white" {...delegated}>
      {children}
    </IconWrapper>
  )
}

const Divider = styled.div`
  height: 2px;
  width: 32px;
  border-radius: 1px;
  background-color: var(--background-modifier-accent);
`

const Container = styled.div`
  background-color: var(--background-tertiary);
  width: 72px;
  overflow: hidden;
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`

const ServerList = () => {
  return (
    <Container>
      <ServerIcon isDiscord={true}>
        <FaDiscord />
      </ServerIcon>
      <Divider></Divider>
      <ServerIcon>
        <AiOutlineCode title="Sample Server"/>
      </ServerIcon>
    </Container>
  )
}

export default ServerList;
