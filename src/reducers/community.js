import initialState from './initialState';

const communityReducer = (state = initialState.community, action) => {
  // console.log('what is action now, ', action.payload);
  switch (action.type) {
    case 'ALL_USERS_FULFILLED':
      console.log('action.payload =====', action.payload)
      return action.payload;
    case 'ALL_USERS_REJECTED':
      console("i got reject");
    case 'ALL_USERS_PENDING':
      console.log('i got pending')
    default:
      return state;
  }
};

export default communityReducer;
