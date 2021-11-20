import io from "socket.io-client";

import { receiveMessage } from "../actions";

const socketMiddleware = () => {
  return storeAPI => {

    // This part is called when the Redux store is created
    const socket = io("/");
    socket.on("message", (message) => {
      storeAPI.dispatch(receiveMessage(message));
    })

    // This part is called when an action is dispatched
    return next => action => {
      switch (action.type) {
        case "chat/sendMessage":
          socket.emit("message", action.payload);
          break;
        default:
          break;
      }
      return next(action);
    }
  }
}

export default socketMiddleware();