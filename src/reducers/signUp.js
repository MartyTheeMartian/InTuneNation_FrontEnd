const signupReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_SIGN_UP_FULFILLED':
      return { ...action.payload };
    default:
      return state;
  }
}

export default signupReducer;
