import initialState from './initialState';

const allPastExercisesReducer = (state = initialState.allPastExercises, action) => {
  switch (action.type) {
    case 'SET_ALL_PAST_EXERCISES_FULFILLED':
      return action.payload;
    default:
      return state;
  }
};

export default allPastExercisesReducer;
