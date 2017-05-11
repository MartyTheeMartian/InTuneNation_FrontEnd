import initialState from './initialState';

const loginReducer = (state = { loginSuccess: initialState.loginSuccess }, action) => {
  switch (action.type) {
    case 'USER_LOG_IN_FULFILLED':
      localStorage.setItem('token', action.payload.data.token);
      localStorage.setItem('userId', action.payload.data.id);
//     localStorage.setItem('firstName', action.payload.data.first_name);
//     localStorage.setItem('lastName', action.payload.data.last_name);
      return { ...action.payload.data, loginSuccess: true };
    case 'USER_LOG_IN_REJECTED':
      return { ...action.payload.response, loginSuccess: false };
    default:
      return state;
  }
};

export default loginReducer;
