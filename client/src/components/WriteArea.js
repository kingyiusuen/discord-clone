import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import InvisibleSubmitButton from './shared/InvisibleSubmitButton';
import { sendMessage } from "../reducers/chatReducer";
import { useGetActiveChannelId } from '../hooks';

const Container = styled.div`
  background-color: var(--background-primary);
  height: 68px;
  padding: 0 16px;
  flex: 0 0 auto;
`

const Input = styled.input`
  border: 0;
  border-radius: 8px;
  background-color: var(--channeltextarea-background);
  color: var(--text-normal);
  font-size: 15px;
  height: 44px;
  outline: none;
  padding-left: 14px;
  width: 100%;

  &::placeholder {
    color: var(--text-muted);
  }
`

const WriteArea = () => {
  const dispatch = useDispatch();
  const activeChannelId = useGetActiveChannelId();
  const channels = useSelector(state => state.chat.channels);
  const activeChannelName = !channels.isLoading && channels.byId[activeChannelId].name;
  const user = useSelector(state => state.session.user);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const content = event.target.content.value;
    dispatch(sendMessage({ user, content, channelId: activeChannelId }));
    event.target.reset();
  }

  return (
    <Container>
      <form onSubmit={handleOnSubmit}>
        <Input
          type="text"
          name="content"
          placeholder={`Message #${activeChannelName}`}
        />
        <InvisibleSubmitButton />
      </form>
    </Container>
  )
}

export default WriteArea
