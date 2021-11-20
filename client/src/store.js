import { configureStore } from "@reduxjs/toolkit";

import socketMiddleware from "./middleware/socketMiddleware";
import chatReducer from "./reducers/chatReducer";
import userReducer from "./reducers/userReducer";


//const asyncFunctionMiddleware = storeAPI => next => action => (
//  (typeof action === "function") ?
//    action(storeAPI.dispatch, storeAPI.getState) :
//    next(action)
//);

const store = configureStore({
  reducer: {
    chat: chatReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(socketMiddleware),
})


export default store;