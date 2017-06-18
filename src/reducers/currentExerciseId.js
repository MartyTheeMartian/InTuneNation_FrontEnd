import initialState from './initialState';

const currentExerciseIdReducer = (state = initialState.currentExerciseId, action) => {
  switch (action.type) {
    case 'SET_EXERCISE_ID_FULFILLED':
      return action.payload;
    case 'BEGIN_NEW_EXERCISE':
      return initialState.currentExerciseId;
    case 'RESET_INTERFACE':
      return initialState.currentExerciseId;
    default:
      return state;
  }
};

export default currentExerciseIdReducer;
