const login = (state = {}, action) => {
  switch (action.type) {
    case 'USER_LOG_IN':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default login;
