import initialState from './initialState';
console.log('am i in the login reducer');
const loginReducer = (state = { loginSuccess: initialState.loginSuccess }, action) => {

  switch (action.type) {
    case 'USER_LOG_IN_FULFILLED':
      console.log('what is action.payload.data', action.payload.data);
      localStorage.setItem('token', action.payload.data.token);
      localStorage.setItem('userId', action.payload.data.id);
      localStorage.setItem('firstName', action.payload.data.firstName);
      localStorage.setItem('lastName', action.payload.data.lastName);
      localStorage.setItem('profile_picture', action.payload.data.profile_picture);
      return { ...action.payload.data, loginSuccess: true };
    case 'USER_LOG_IN_REJECTED':
      return { ...action.payload.response, loginSuccess: false };
    default:
      return state;
  }
};

export default loginReducer;
