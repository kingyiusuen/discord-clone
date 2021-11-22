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
  channels: { byId: {}, allIds: [] },
  messages: { byId: {}, allIds: [] },
  isLoadingMessages: true,
  error: null,
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadMessages.pending, (state, action) => {
        state.isLoadingMessages = true;
      })
      .addCase(loadMessages.fulfilled, (state, action) => {
        state.isLoadingMessages = false;
        state.error = null;
        state.messages = { byId: {}, allIds: [] };
        action.payload.forEach((message) => {
          state.messages.byId[message.id] = message;
          state.messages.allIds.push(message.id);
        })
      })
      .addCase(loadMessages.rejected, (state, action) => {
        state.isLoadingMessages = false;
        state.error = action.payload.message;
      })
      .addCase(loadChannels.fulfilled, (state, action) => {
        state.channels = { byId: {}, allIds: [] };
        action.payload.forEach((channel) => {
          state.channels.byId[channel.id] = channel;
          state.channels.allIds.push(channel.id);
        })
      })
  }
})

export const { receiveMessage, updateOnlineUsers, sendMessage } = chatSlice.actions;

export default chatSlice.reducer;