import initialState from './initialState';

const sendArrayReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ALL_NOTE':
      return [...action.payload]
    default:
      return state;
  }
};

export default sendArrayReducer;
