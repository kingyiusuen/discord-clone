import React, { useRef } from 'react';

import { useSelector } from "react-redux";
import styled, { css } from "styled-components";

import ServerList from "./ServerList";
import ChannelList from "./ChannelList";
import Backdrop from "./shared/Backdrop";
import { toggleSidebar } from '../reducers/sidebarReducer';
import { useDetectClickOutside } from "../hooks";

const Container = styled.div`
  display: flex;
  flex: 0 0 auto;
  height: 100vh;
  z-index: 1300;

  @media (max-width: 768px) {
    & {
      position: fixed;
      left: -100%;
      transition: 0.3s;
    }

    ${p => p.isActive && css`
      & {
        left: 0;
      }
    `}
  }
`

const Sidebar = ({ isMobile }) => {
  const sidebarRef = useRef(null);
  const showSidebar = useSelector(state => state.sidebar.isOpen);
  useDetectClickOutside({
    action: toggleSidebar,
    listenCondition: isMobile && showSidebar,
    ref: sidebarRef,
  })

  return (
    <Backdrop isActive={isMobile && showSidebar}>
      <Container isActive={isMobile && showSidebar} ref={sidebarRef}>
        <ServerList />
        <ChannelList />
      </Container>
    </Backdrop>
  )
}

export default Sidebar
