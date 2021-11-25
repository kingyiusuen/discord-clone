import React from 'react';

import { useDispatch, useSelector } from "react-redux";
import {
  FaBars,
  FaGithub,
  FaSignOutAlt,
  FaUserFriends,
} from "react-icons/fa";
import styled from "styled-components"

import Hashtag from "./shared/Hashtag";
import Icon from "./shared/Icon";
import Stack from "./shared/Stack";
import { toggleSidebar } from '../reducers/sidebarReducer';
import { toggleMemberList } from '../reducers/memberListReducer';

const Container = styled.div`
  background-color: var(--background-primary);
  border-bottom: 1px solid var(--background-tertiary);
  height: 48px;
  flex: 0 0 auto;
  padding: 0 16px;
  align-items: center;
  display: flex;
  justify-content: space-between;
`

const Heading = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: var(--header-primary);
`

const Header = () => {
  const dispatch = useDispatch();
  const isMemberListOpen = useSelector(state => state.memberList.isOpen);
  const channels = useSelector(state => state.channels);
  const activeChannelName = !channels.loading && channels.byId[channels.active].name;

  return (
    <Container className="disable-select">
      <Stack horizontal={true} gap="10px">
        <Icon
          title="Sidebar"
          className="hamburger"
          onClick={() => dispatch(toggleSidebar())}
        >
          <FaBars />
        </Icon>
        <Stack horizontal={true} gap="6px" style={{ alignItems: "center"}}>
          <Hashtag />
          <Heading>
            {!channels.loading && activeChannelName}
          </Heading>
        </Stack>
      </Stack>
      <Stack horizontal={true} gap="10px">
        <Icon
          title="GitHub Repo"
          href="https://github.com/kingyiusuen/discord-clone"
          target="blank"
        >
          <FaGithub />
        </Icon>
        <Icon
          title="User list"
          onClick={() => dispatch(toggleMemberList())}
          isActive={isMemberListOpen}
        >
          <FaUserFriends />
        </Icon>
        <Icon
          title="Logout"
          onClick={() => console.log("logout")}
        >
          <FaSignOutAlt />
        </Icon>
      </Stack>
    </Container>
  )
}

export default Header;
