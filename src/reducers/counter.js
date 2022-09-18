import { ACTIONS } from '../actions'

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return state + action.paylaod.number
    case ACTIONS.DECREMENT:
      return state - 1
    default: return state
  }
}

export default counterReducer