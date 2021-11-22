import { configureStore } from "@reduxjs/toolkit";

import socketMiddleware from "./middleware/socketMiddleware";
import chatReducer from "./reducers/chatReducer";
import sessionReducer from "./reducers/sessionReducer";
import userListReducer from "./reducers/userListReducer";

const store = configureStore({
  reducer: {
    chat: chatReducer,
    session: sessionReducer,
    userList: userListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(socketMiddleware),
})


export default store;