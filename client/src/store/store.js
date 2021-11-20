import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import chatReducer from "../reducers/chatReducer";

const configureStore = () =>
  createStore(chatReducer, applyMiddleware(thunk));

export default configureStore;