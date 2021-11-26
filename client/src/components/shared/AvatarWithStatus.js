import React from 'react';

import styled from "styled-components";

import Avatar from "./Avatar";
import GreenDot, { Wrapper as GreenDotWrapper } from "./GreenDot";

const Container = styled.div`
  position: relative;

  ${GreenDotWrapper} {
    padding: 0.5px;
    height: 16px;
    width: 16px;
    position: absolute;
    right: -4px;
    bottom: -4px;
  }
`

const AvatarWithStatus = ({ backgroundColor }) => {
  return (
    <Container>
      <Avatar backgroundColor={backgroundColor} />
      <GreenDot />
    </Container>
  )
}

export default AvatarWithStatus
