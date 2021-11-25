import React from "react";

import styled from "styled-components";

export const Wrapper = styled.button`
  display: none;
`

const InvisibleSubmitButton = () => {
  return <Wrapper></Wrapper>
}

export default InvisibleSubmitButton;