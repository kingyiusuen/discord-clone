import { createAction } from '@reduxjs/toolkit';

export const sendMessage = createAction('chat/sendMessage', (content) => {
  return {
    payload: {
      content,
      username: "username",
      createdAt: new Date().toISOString(),
    },
  }
})

export const receiveMessage = createAction("chat/receiveMessage");

export const changeActiveChannel = createAction("chat/changeActiveChannel");
