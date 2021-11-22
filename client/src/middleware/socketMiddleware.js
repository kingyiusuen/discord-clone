import io from "socket.io-client";

import { receiveMessage } from "../reducers/chatReducer";
import { updateOnlineUsers } from "../reducers/userListReducer";

const socketMiddleware = () => {
  return storeAPI => {

    // This part is called when the Redux store is created
    const socket = io("/", { autoConnect: false });

    socket.on("message", (message) => {
      storeAPI.dispatch(receiveMessage(message))
    });

    socket.on("update-user-list", (user) => {
      storeAPI.dispatch(updateOnlineUsers(user))
    })

    // This part is called when an action is dispatched
    return next => action => {
      switch (action.type) {
        case "chat/sendMessage":
          socket.emit("message", action.payload);
          break;
        case "session/connectSocket":
          socket.connect();
          socket.emit("new-login", action.payload);
          break;
        case "session/logout":
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