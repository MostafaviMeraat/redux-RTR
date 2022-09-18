export const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  SETLOG: 'log-in/out',
}

export const increment = (number) => {
  return {
    type: ACTIONS.INCREMENT,
    paylaod: {
      number: number
    }
  }
}

export const decrement = () => {
  return {
    type: ACTIONS.DECREMENT
  }
}

export const setLog = (curr) => {
  return {
    type: ACTIONS.SETLOG,
    paylaod: {
      status: curr
    }
  }
}








