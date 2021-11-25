import React from "react";

import styled from "styled-components";
import { FaHashtag } from "react-icons/fa";

import { Wrapper as IconWrapper } from "./Icon";

const Wrapper = styled(IconWrapper)`
  color: var(--text-muted);

  &:hover {
    color: var(--text-muted);
  }
`

const Hashtag = ({ ...delegated }) => {
  return (
    <Wrapper {...delegated}>
      <FaHashtag />
    </Wrapper>
  )
}

export default Hashtag;
