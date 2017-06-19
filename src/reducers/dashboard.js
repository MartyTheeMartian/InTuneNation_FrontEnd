import initialState from './initialState';

const dashboardReducer = (state = initialState.dashboard, action) => {
  switch (action.type) {
    case 'PAST_EXERCISES_TABLE_RUN_FULFILLED':
      // console.log('what is past exercise ===', [...initialState.dashboard, ...action.payload.data]);
      return [ ...state, ...action.payload.data ];
      // return state.concat(action.payload)
    default:
      return state;
  }
};

export default dashboardReducer;
