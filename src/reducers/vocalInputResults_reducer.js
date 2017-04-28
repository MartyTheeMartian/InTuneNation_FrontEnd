import initialState from './initialState';

const vocalInputReducer = (state = {capture: false}, action) => {
  console.log('React/src/reducers/vocalInputResults_reducer.js/vocalInputReducer()');
  switch (action.type) {
    case 'ADD_VOCAL_INPUT_RESULT':
      return action;
      console.log(state);
    default:
      return state;
  }
};

export default vocalInputReducer;
