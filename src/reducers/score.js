import initialState from './initialState';

const scoreReducer = (state = initialState.score, action) => {
  switch (action.type) {
    case 'DECREMENT_SCORE':
      return state - action.amount;
    case 'RESET_SCORE':
      return initialState.score;
    case 'RESET_INTERFACE':
      return initialState.score;
    default:
      return state;
  }
};

export default scoreReducer;
