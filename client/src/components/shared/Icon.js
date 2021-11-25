import React from "react";

import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  font-size: 22px;
  padding: 5px;

  ${({ interactive, isActive }) => interactive && css`
    color: ${isActive ? "var(--interactive-active)" : "var(--channels-default)"};

    &:hover {
      color: var(--interactive-hover);
    }
  `}
`

const Icon = ({ children, ...delegated }) => {
  const tag = (delegated.href && "a") || (delegated.onClick && "button") || "div";
  const interactive = (tag === "a") || (tag === "button");

  return (
    <Wrapper as={tag} interactive={interactive} {...delegated}>
      {children}
    </Wrapper>
  )
}

export default Icon;