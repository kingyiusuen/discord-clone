import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  "messages": [],
  "activeChannel": "annoucement"
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    sendMessage(state, action) {
      state.messages.push(action.payload);
    },
    receiveMessage(state, action) {
      state.messages.push(action.payload);
    },
    changeActiveChannel(state, action) {
      state.activeChannel = action.payload;
    }
  }
})

export const { messageSent } = chatSlice.actions;

export default chatSlice.reducer;