import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  "user": null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload
    },
    logout(state, action) {
      state.user = null
    }
  }
})

export const { login } = userSlice.actions;

export default userSlice.reducer;