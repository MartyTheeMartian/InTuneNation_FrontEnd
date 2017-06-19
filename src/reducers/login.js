import initialState from './initialState';
const loginReducer = (state = { loginSuccess: initialState.loginSuccess }, action) => {

  switch (action.type) {
    case 'USER_LOG_IN_FULFILLED':
      localStorage.setItem('token', action.payload.data.token);
      localStorage.setItem('userId', action.payload.data.id);
      localStorage.setItem('firstName', action.payload.data.firstName);
      localStorage.setItem('lastName', action.payload.data.lastName);
      localStorage.setItem('profile_picture', action.payload.data.profile_picture);
      return { ...state, ...action.payload.data, loginSuccess: true };
    case 'USER_LOG_IN_REJECTED':
      return { ...action.payload.response, loginSuccess: false };
    default:
      return state;
  }
};

export default loginReducer;
