const signup = (state = {}, action) => {
  switch (action.type) {
    case 'SIGN_USER_UP':
      return {...state, user: action.payload };
    default:
      return state;
  }
}

export default signup;
