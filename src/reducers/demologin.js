import initialState from './initialState';
const loginReducer = (state = { }, action) => {

  switch (action.type) {
    case 'DEMO_FULFILLED':
      return { ...action.payload.data };
    default:
      return state;
  }
};

export default loginReducer;
