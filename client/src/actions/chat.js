import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import * as channelAPI from "../api/channel";

export const sendMessage = createAction('chat/sendMessage');

export const receiveMessage = createAction("chat/receiveMessage");

export const getChannels = createAsyncThunk(
  "chat/getChannels",
  async (_, { rejectWithValue }) => {
    try {
      const response = await channelAPI.getChannels();
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

export const setActiveChannel = createAsyncThunk(
  "chat/setActiveChannel",
  async (channelId, { rejectWithValue }) => {
    try {
      const response = await channelAPI.getMessages(channelId);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);