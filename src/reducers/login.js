import initialState from './initialState';

const loginReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case 'USER_LOG_IN_FULFILLED':
    localStorage.setItem('token', action.payload.data.token);
    localStorage.setItem('userId', action.payload.data.id);
    localStorage.setItem('firstName', action.payload.data.first_name);
    localStorage.setItem('lastName', action.payload.data.last_name);
      return { ...action.payload.data };
    default:
      return state;
  }
};

export default loginReducer;
