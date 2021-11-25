import React, { useEffect } from "react";

import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { login, connectSocket } from "../reducers/sessionReducer";
import { loadChannels } from "../reducers/channelsReducer";
import Avatar from "./shared/Avatar.js"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--brand);
  min-height: 100vh;
  width: 100%;
  color: var(--text-normal);
`

const Container = styled.div`
  padding: 24px;
  background-color: var(--background-primary);
  box-shadow: 0 2px 10px 0 rgba(0,0,0,.2);
  border-radius: 5px;
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;

  @media only screen and (max-width: 550px) {
    min-height: 100vh;
    min-width: 100vw;
    justify-content: center;
  }
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 96px;
`

const Heading = styled.h1`
  font-size: 18px;
  font-weight: 500;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 13px;

  @media only screen and (max-width: 550px) {
    margin-bottom: 64px;
  }
`

const Label = styled.label`
  color: var(--header-secondary);
  font-weight: 500;
  text-transform: uppercase;
`

const SubmitButton = styled.button`
  background-color: rgb(88, 101, 242);
  border: 0;
  border-radius: 4px;
  padding: 12px 8px;
  margin-top: 8px;
  color: white;
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;

  &:hover {
    background-color: rgb(71, 82, 196);
    cursor: pointer;
  }
`

const Select = styled.select`
  margin-top: 6px;
  margin-bottom: 14px;
  padding: 10px 8px 10px 12px;
  background-color: var(--background-secondary);
  border: 1px solid var(--background-secondary-alt);
  color: var(--text-normal);
  font-size: 14px;
  border-radius: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:focus {
    outline: none;
  }

  /* https://codepen.io/vkjgr/pen/VYMeXp */
  background-image:
    linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%);
  background-position:
    calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px);
  background-size:
    5px 5px,
    5px 5px;
  background-repeat: no-repeat;

  &:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }
`

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    dispatch(login({ username, password: username }));
  }

  const session = useSelector(state => state.session);

  useEffect(() => {
    if (session.isAuthenticated) {
      dispatch(connectSocket(session.user));
      dispatch(loadChannels());
      navigate("/channels/1");
    }
  }, [dispatch, navigate, session])

  return (
    <Wrapper className="disable-select">
      <Container>
        <Header>
          <Avatar style={{ fontSize: "48px", backgroundColor: "transparent" }} />
          <Heading>Discord Clone</Heading>
        </Header>
        <Form onSubmit={handleOnSubmit}>
          <Label htmlFor="username">Username</Label>
          <Select name="username" id="username" defaultValue="john.doe">
            <option value="john.doe">john.doe</option>
            <option value="jane.doe">jane.doe</option>
            <option value="react.god">react.god</option>
          </Select>
          <SubmitButton type="submit">Login</SubmitButton>
        </Form>
        {session.error}
      </Container>
    </Wrapper>
  )
}

export default LoginPage
