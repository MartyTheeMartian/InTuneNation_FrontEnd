import initialState from './initialState';

const scoreReducer = (state = initialState.score, action) => {
  let score = state;
  switch (action.type) {
    case 'DECREMENT_SCORE':
      return score - action.amount;
    case 'RESET_SCORE':
      return initialState.score;
    case 'REPEAT_EXERCISE':
      return initialState.score;
    case 'RESET_INTERFACE':
      return initialState.score;
    default:
      return state;
  }
};

export default scoreReducer;
