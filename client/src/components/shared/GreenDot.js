import React from "react";

import styled from "styled-components";
import { MdFiberManualRecord } from "react-icons/md";

import { Wrapper as IconWrapper } from "./Icon";

export const Wrapper = styled(IconWrapper)`
  background-color: var(--background-secondary-alt);
  border-radius: 50%;
  color: #3AA55D;
`

const GreenDot = ({ ...delegated }) => {
  return (
    <Wrapper {...delegated}>
      <MdFiberManualRecord />
    </Wrapper>
  )
}

export default GreenDot;