import initialState from './initialState';

const greenTimeReducer = (state = initialState.greenTime, action) => {
  switch (action.type) {
    case 'INCREMENT_GREEN_TIME':
      return {
        accumulated: state.accumulated + 1,
        required: state.required,
      };
    case 'RESET_GREEN_TIME':
      return {
        accumulated: 0,
        required: state.required,
      };
    case 'CHANGE_GREEN_TIME_REQUIREMENT':
      return {
        accumulated: state.accumulated,
        required: action.amount,
      };
    case 'EXERCISE_FINISHED':
      return initialState.greenTime; // might introduce bugs
    case 'RESET_INTERFACE':
      return initialState.greenTime;
    default:
      return state;
  }
};

export default greenTimeReducer;
