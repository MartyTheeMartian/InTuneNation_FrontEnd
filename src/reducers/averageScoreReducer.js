import initialState from './initialState';

const averageScoreReducer = ( state = initialState.averageScore, action ) => {
  switch (action.type) {
    case 'AVERAGE_FULFILLED':
      // console.log('payload now is', action.payload.data);
      return action.payload.data;
    default:
      return state;
  }
}

export default averageScoreReducer;
