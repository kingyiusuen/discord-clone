import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  "isOpen": false,
  "servers": { byId: {}, allIds: {}},
  "channels": { byId: {}, allIds: {}},
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar(state, action) {
      state.isOpen = !state.isOpen;
    }
  },
})

export const { toggleSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;