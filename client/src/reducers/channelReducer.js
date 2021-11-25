import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as channelAPI from "../api/channel";

export const loadChannels = createAsyncThunk(
  "channel/loadChannels",
  async (_, { rejectWithValue }) => {
    try {
      const response = await channelAPI.getChannels();
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

const initialState = {
  byId: {},
  allIds: [],
  isLoading: false,
  error: null,
};

const channelSlice = createSlice({
  name: "channel",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadChannels.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loadChannels.fulfilled, (state, action) => {
        state.isLoading = false;
        state.byId = {};
        state.allIds = [];
        action.payload.forEach((channel) => {
          state.byId[channel.id] = channel;
          state.allIds.push(channel.id);
        })
        state.error = null;
      })
      .addCase(loadChannels.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      })
  }
})

export default channelSlice.reducer;