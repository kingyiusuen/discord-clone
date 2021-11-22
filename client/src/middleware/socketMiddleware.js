import io from "socket.io-client";

import { receiveMessage, updateUserList } from "../actions/chat";

const socketMiddleware = () => {
  return storeAPI => {

    // This part is called when the Redux store is created
    const socket = io("/", { autoConnect: false });

    socket.on("message", (message) => {
      storeAPI.dispatch(receiveMessage(message))
    });

    socket.on("update-user-list", (user) => {
      storeAPI.dispatch(updateUserList(user))
    })

    // This part is called when an action is dispatched
    return next => action => {
      switch (action.type) {
        case "chat/sendMessage":
          socket.emit("message", action.payload);
          break;
        case "chat/connectSocket":
          socket.connect();
          socket.emit("new-login", action.payload);
          break;
        case "auth/logout":
          socket.close();
          break;
        default:
          break;
      }
      return next(action);
    }
  }
}

export default socketMiddleware();