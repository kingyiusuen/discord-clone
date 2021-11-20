import {
  SET_ACTIVE_CHANNEL,
} from "../actions";

const INITIAL_STATE = {
  activeChannel: "announcement",
  messages: [],
}

const chatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ACTIVE_CHANNEL:
      return {
        ...state,
        activeChannel: action.payload
      }
    default:
      return state
  }
}

export default chatReducer