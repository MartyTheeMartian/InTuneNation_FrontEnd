import initialState from './initialState';

const scoreReducer = (state = initialState.score, action) => {
  switch (action.type) {
    case 'DECREMENT_SCORE':
      return state - action.amount;
    case 'RESET_SCORE':
      return 100;
    default:
      return state;
  }
};

export default scoreReducer;
