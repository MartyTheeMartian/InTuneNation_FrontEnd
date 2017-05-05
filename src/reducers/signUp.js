const signupReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_SIGN_UP_FULFILLED':
      localStorage.setItem('token', action.payload.data.token);
      return { ...action.payload.data };
    default:
      return state;
  }
};

export default signupReducer;
