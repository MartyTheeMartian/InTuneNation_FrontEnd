import initialState from './initialState';

const keyEventsReducer = (state = initialState.keyStrokeEvents, action) => {
  switch (action.type) {
    case 'ADD_KEY_EVENT':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default keyEventsReducer;
