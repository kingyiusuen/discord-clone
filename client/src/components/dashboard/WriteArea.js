import React, { useEffect, useRef } from 'react'

import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import InvisibleSubmitButton from './InvisibleSubmitButton';
import { sendMessage, typing, stopTyping } from "../../reducers/chatReducer";
import { useActiveChannel } from "../../hooks";

const Container = styled.div`
  background-color: var(--background-primary);
  height: 68px;
  padding: 0 16px;
  flex: 0 0 auto;
`

const Form = styled.form``

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

const TypingStatus = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: var(--text-normal);
  padding: 0 14px;
`

const WriteArea = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);

  const activeChannel = useActiveChannel();

  const handleSubmit = (event) => {
    event.preventDefault();
    const content = event.target.content.value;
    if (content !== "") {
      dispatch(sendMessage({ user, content, channelId: activeChannel.id }));
      event.target.reset();
    }
    dispatch(stopTyping(user));
  }

  const typingUser = useSelector(state => state.chat.typingUser);

  // Detect whether the user is typing
  const inputRef = useRef(null);
  useEffect(() => {
    let timeout = undefined;
    inputRef.current.addEventListener("keyup", () => {
      dispatch(typing(user));
      clearTimeout(timeout);
      timeout = setTimeout(() => dispatch(stopTyping(user)), 3000);
    })
  }, [dispatch, user])

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          ref={inputRef}
          type="text"
          name="content"
          placeholder={`Message #${activeChannel?.name}`}
        />
        <InvisibleSubmitButton />
      </Form>
      <TypingStatus>
        {typingUser && `${typingUser.username} is typing...`}
      </TypingStatus>
    </Container>
  )
}

export default WriteArea
