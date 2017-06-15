import initialState from './initialState';

const signupReducer = (state = { signupSuccess: initialState.signupSuccess }, action) => {
  switch (action.type) {
    case 'USER_SIGN_UP_FULFILLED':
      localStorage.setItem('userId', action.payload.data.id);
      localStorage.setItem('token', action.payload.data.token);
      localStorage.setItem('profile_picture', action.payload.data.profile_picture);
      return { ...action.payload.data, signupSuccess: true };
    case 'USER_SIGN_UP_REJECTED':
      return { ...action.payload.response, signupSuccess: false };
    default:
      return state;
  }
};

export default signupReducer;
