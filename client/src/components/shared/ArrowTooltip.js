import React from 'react';

import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';


const Wrapper = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "black",
    fontSize: 14,
    fontWeight: 500,
    padding: 10,
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "black",
  },
}));

const ArrowTooltip = ({ children, ...delegated }) => {
  return (
    <Wrapper {...delegated} arrow>
      {children}
    </Wrapper>
  )
}

export default ArrowTooltip;
