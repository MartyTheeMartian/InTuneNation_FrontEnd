import initialState from './initialState';

const scoreReducer = (state = initialState.score, action) => {
  // console.log('React/src/reducers/vocalInputResults_reducer.js/vocalInputReducer()');
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
