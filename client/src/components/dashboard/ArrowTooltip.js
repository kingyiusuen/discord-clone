import React from "react";

import Tooltip from "@mui/material/Tooltip";
import styled from "styled-components";

const StyledTooltip = styled((props) => (
  <Tooltip classes={{ popper: props.className }} {...props} />
))`
  & .MuiTooltip-tooltip {
    background-color: black;
    font-size: 14px;
    font-weight: 500;
    padding: 10px;
  }

  & .MuiTooltip-arrow {
    color: black;
  }
`;

const ArrowTooltip = ({ children, ...delegated }) => {
  return (
    <StyledTooltip {...delegated} arrow>
      <div>{children}</div>
    </StyledTooltip>
  );
};

export default ArrowTooltip;
