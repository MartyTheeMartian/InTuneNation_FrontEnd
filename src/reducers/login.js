import initialState from './initialState';

const loginReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case 'USER_LOG_IN_FULFILLED':
      return { ...action.payload };
    default:
      return state;
  }
};

export default loginReducer;
