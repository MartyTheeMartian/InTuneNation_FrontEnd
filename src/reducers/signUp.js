const signup = (state = {}, action) => {
  console.log('am I here???????????');
  switch (action.type) {
    case 'USER_SIGN_UP':
      return {...state, ...action.payload };
    default:
      return state;
  }
}

export default signup;
