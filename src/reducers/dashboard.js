import initialState from './initialState';

const dashboard = (state = initialState.graphData, action) => {
  switch (action.type) {
    case 'PAST_EXERCISES_TABLE_RUN_FULFILLED':
      console.log('what is dashboard?', action.payload.data);
      return action.payload.data;
    default:
      return state;
  }
};

export default dashboard;
