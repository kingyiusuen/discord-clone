import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

import * as userAPI from "../api/user";

export const logout = createAction("auth/logout");

export const login = createAsyncThunk(
  "auth/login",
  async (userInfo, { rejectWithValue }) => {
    try {
      const response = await userAPI.login(userInfo);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);