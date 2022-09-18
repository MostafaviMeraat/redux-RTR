export const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
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








