import React from "react";

import styled from "styled-components";
import { FaDiscord } from "react-icons/fa";

import { Wrapper as IconWrapper } from "./Icon";

export const Wrapper = styled(IconWrapper)`
  background-color: ${p => p.backgroundColor || "var(--brand)"};
  border-radius: 50%;
  display: flex;
  color: white;
`

const Avatar = ({ ...delegated }) => {
  return (
    <Wrapper {...delegated}>
      <FaDiscord />
    </Wrapper>
  )
}

export default Avatar;