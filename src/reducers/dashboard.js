import initialState from './initialState';

const dashboard = (state = initialState.graphData, action) => {
  switch (action.type) {
    case 'DASHBOARD_RUN_FULFILLED':
      return action.payload.data[0];
    default:
      return state;
  }
};

export default dashboard;
