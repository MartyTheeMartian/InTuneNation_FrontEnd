import initialState from './initialState';

const allScorePerExercise = (state = initialState.graphData, action) => {
  switch (action.type) {
    case 'ALL_INTONATION_PER_EXERCISE_FULFILLED':
      console.log('what is allScorePerExercise?', action.payload.data);
      return action.payload.data;
    default:
      return state;
  }
};

export default allScorePerExercise;
