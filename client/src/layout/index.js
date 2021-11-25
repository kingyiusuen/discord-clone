import styled from "styled-components";

import ChatArea from "../components/ChatArea";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MemberList from "../components/MemberList";

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

export const DesktopLayout = () => {
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

export const MobileLayout = () => {
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