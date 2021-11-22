import { createSlice } from "@reduxjs/toolkit";

import { getChannels, setActiveChannel } from "../actions/chat";

const initialState = {
  "messages": { byId: {}, allIds: [] },
  "channels": { byId: {}, allIds: [] },
  "onlineUsers": [],
  "activeChannelId": 1,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    receiveMessage(state, action) {
      const message = action.payload;
      state.messages.byId[message.id] = message;
      state.messages.allIds.push(message.id);
    },
    updateOnlineUsers(state, action) {
      state.onlineUsers = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getChannels.fulfilled, (state, action) => {
        state.channels = { byId: {}, allIds: [] };
        action.payload.forEach((channel) => {
          state.channels.byId[channel.id] = channel;
          state.channels.allIds.push(channel.id);
        })
      })
      .addCase(setActiveChannel.fulfilled, (state, action) => {
        state.activeChannelId = action.payload.activeChannelId;
        state.messages = { byId: {}, allIds: [] };
        action.payload.forEach((message) => {
          state.messages.byId[message.id] = message;
          state.messages.allIds.push(message.id);
        })
      })
  }
})

export const { messageSent } = chatSlice.actions;

export default chatSlice.reducer;