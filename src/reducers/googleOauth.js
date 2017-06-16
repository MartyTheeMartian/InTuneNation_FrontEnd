import initialState from './initialState';

const googleOauthReducer = (state = { }, action) => {
  switch (action.type) {
    case 'LOAD_PROFILE':
      return { ...action.payload };
    default:
      return state;
  }
};

export default googleOauthReducer;
