import initialState from './initialState';

const greenTimeReducer = (state = initialState.greenTime, action) => {
  console.log('React/src/reducers/vocalInputResults_reducer.js/vocalInputReducer()');
  switch (action.type) {
    case 'INCREMENT_GREEN_TIME':
      return {
        accumulated: state.greenTime.accumulated + 1,
        required: state.greenTime.required
      };
      console.log(state);
    case 'RESET_GREEN_TIME':
      return {
        accumulated: 0,
        required: state.greenTime.required
      };
    case 'CHANGE_GREEN_TIME_REQUIREMENT':
      return {
        accumulated: state.greenTime.accumulated,
        required: action.amount
      };
    default:
      return state;
  }
};

export default greenTimeReducer;
