import initialState from './initialState';
const loginReducer = (state = { loginSuccess: initialState.loginSuccess }, action) => {

  switch (action.type) {
    case 'USER_LOG_IN_FULFILLED':
      return { ...action.payload.data, loginSuccess: true };
    case 'USER_LOG_IN_REJECTED':
      return { ...action.payload.response, loginSuccess: false };
    default:
      return state;
  }
};

export default loginReducer;
