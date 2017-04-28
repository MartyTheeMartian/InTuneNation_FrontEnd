import initialState from './initialState';

const keyEventsReducer = (state = initialState.keyStrokeEvents , action) => {
  console.log('React/src/reducers/keyEvents_reducer.js/keyEventsReducer()');
  switch (action.type) {
    case 'ADD_KEY_EVENT':
      return action;
      console.log(state);
    default:
      return state;
  }
};

export default keyEventsReducer;
