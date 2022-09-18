import { ACTIONS } from "../actions"

const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case ACTIONS.SETLOG:
      return !state
    default: return state
  }
}

export default loggedReducer