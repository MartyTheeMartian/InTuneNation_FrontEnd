const signupReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_SIGN_UP':
      return {...state, ...action.payload };
    default:
      return state;
  }
}

export default signupReducer;
