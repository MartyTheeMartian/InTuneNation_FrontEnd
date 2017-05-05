import initialState from './initialState';

const loginReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case 'USER_LOG_IN_FULFILLED':
      localStorage.setItem('token', action.payload.data.token);
      return { ...action.payload.data };
    default:
      return state;
  }
};

export default loginReducer;
