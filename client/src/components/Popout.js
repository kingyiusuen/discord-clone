import React from 'react';

import styled from "styled-components";

import Avatar, { Wrapper as AvatarWrapper } from "./shared/Avatar";
import InvisibleSubmitButton from "./shared/InvisibleSubmitButton";
import Divider from "./shared/Divider";

const Wrapper = styled.div`
  position: absolute;
  top: 88px;
  right: 248px;
  width: 300px;

  box-shadow: var(--elevation-high);
  background-color: var(--background-floating);
  border-radius: 8px;
  overflow: hidden;
  max-height: calc(100vh - 20px);
  display: flex;
  flex-direction: column;

  ${AvatarWrapper} {
    font-size: 52px;
    height: 90px;
    width: 90px;
    border: 6px solid var(--background-floating);
  }
`

const Banner = styled.div`
  background-color: var(--brand);
  width: 300px;
  height: 60px;
`

const Header = styled.div`
  padding: 64px 16px 16px;
  overflow: hidden;
  position: relative;
  display: block;
`

const Content = styled.div`
  padding: 0 16px 16px 16px;
`

const Username = styled.span`
  color: var(--interactive-active);
  font-weight: 600;
  font-size: 24px;
`

const Footer = styled.div`
  padding: 0 16px 16px;
`

const Input = styled.input`
  background-color: var(--background-secondary-alt);
  font-size: 14px;
  padding: 10px;
  height: 40px;
  width: 100%;
  border-radius: 3px;
  border: none;
  color: var(--text-muted);
  transition: 0.1s;

  &:focus {
    outline: 1px solid #00B0F4;
  }
`

const Popout = () => {
  return (
    <Wrapper>
      <Banner></Banner>
      <div style={{ position: 'absolute', top: "16px", left: "16px"}}>
        <Avatar />
      </div>
      <Header>
        <Username>asdfsds</Username>
      </Header>
      <Content>
        <Divider />
      </Content>
      <Footer>
        <Input placeholder="message @john_doe"/>
        <InvisibleSubmitButton />
      </Footer>
    </Wrapper>
  )
}

export default Popout;