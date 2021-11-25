import React from "react";

import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${p => p.isActive && css`
    position: fixed;
    inset: 0px;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1201;
  `}
`

const Backdrop = ({ isActive, children, ...delegated }) => {

  return (
    <Wrapper isActive={isActive} {...delegated}>
      {children}
    </Wrapper>
  )
}

export default Backdrop;