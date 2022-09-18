const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case 'sign_in':
      return !true
    default: return state
  }
}

export default loggedReducer