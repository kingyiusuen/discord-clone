import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { useWindowWidth } from "../hooks";
import ChatArea from "../components/ChatArea";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MemberList from "../components/MemberList";
import { loadMessages } from "../reducers/chatReducer";
import { setActiveChannel } from "../reducers/channelsReducer";

const Container = styled.div`
  display: flex;
  height: 100vh;
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (max-width: 768px) {
    & {
      display: flex;
      flex-direction: column;
    }
  }
`

const Content = styled.div`
  display: flex;
  flex: 1;

  @media (max-width: 768px) {
    & {
      display: flex;
      flex-direction: column;
    }
  }
`

const DesktopLayout = () => {
  return (
    <Container>
      <Sidebar isMobile={true} />
      <Main>
        <Header />
        <Content>
          <ChatArea />
          <MemberList isMobile={false} />
        </Content>
      </Main>
    </Container>
  )
};

const MobileLayout = () => {
  return (
    <Container>
      <Sidebar isMobile={true} />
      <Main>
        <Content>
          <Header />
          <ChatArea />
        </Content>
        <MemberList isMobile={true} />
      </Main>
    </Container>
  )
};

const Dashboard = () => {
  const width = useWindowWidth();
  const isMobile = width <= 768;

  const params = useParams();
  const activeChannelId = parseInt(params.channel);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveChannel(activeChannelId));
    dispatch(loadMessages(activeChannelId));
  }, [activeChannelId, dispatch])

  return (
    isMobile ? <MobileLayout /> : <DesktopLayout />
  )
}

export default Dashboard;