import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as channelAPI from "../api/channel";

export const loadChannels = createAsyncThunk(
  "chat/loadChannels",
  async (_, { rejectWithValue }) => {
    try {
      const response = await channelAPI.getChannels();
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

export const loadMessages = createAsyncThunk(
  "chat/loadMessages",
  async (channelId, { rejectWithValue }) => {
    try {
      const response = await channelAPI.getMessages(channelId);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

const initialState = {
  channels: { byId: {}, allIds: [], isLoading: true },
  messages: { byId: {}, allIds: [], isLoading: true },
  typingUser: null,
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
    sendMessage(state, action) { },
    typing(state, action) { },
    stopTyping(state, action) { },
    updateTypingUser(state, action) {
      state.typingUser = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadMessages.pending, (state, action) => {
        state.messages.isLoading = true;
      })
      .addCase(loadMessages.fulfilled, (state, action) => {
        state.messages = { byId: {}, allIds: [], isLoading: false };
        action.payload.forEach((message) => {
          state.messages.byId[message.id] = message;
          state.messages.allIds.push(message.id);
        })
      })
      .addCase(loadChannels.pending, (state, action) => {
        state.messages.isLoading = true;
      })
      .addCase(loadChannels.fulfilled, (state, action) => {
        state.channels = { byId: {}, allIds: [], isLoading: false };
        action.payload.forEach((channel) => {
          state.channels.byId[channel.id] = channel;
          state.channels.allIds.push(channel.id);
        })
      })
  }
})

export const {
  receiveMessage,
  updateOnlineUsers,
  updateTypingUser,
  sendMessage,
  stopTyping,
  typing,
} = chatSlice.actions;

export default chatSlice.reducer;