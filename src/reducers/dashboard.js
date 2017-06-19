import initialState from './initialState';

const dashboardReducer = (state = initialState.dashboard, action) => {
  switch (action.type) {
    case 'PAST_EXERCISES_TABLE_RUN_FULFILLED':
      return action.payload.data;
    default:
      return state;
  }
};

export default dashboardReducer;
