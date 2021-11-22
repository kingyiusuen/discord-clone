import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  "onlineUsers": [],
};

const userListSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    updateOnlineUsers(state, action) {
      state.onlineUsers = action.payload;
    },
  },
})

export const { updateOnlineUsers } = userListSlice.actions;

export default userListSlice.reducer;