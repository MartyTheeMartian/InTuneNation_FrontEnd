import initialState from './initialState';

const exerciseScoresReducer = (state = initialState.exerciseScores, action) => {
  console.log('React/src/reducers/vocalInputResults_reducer.js/vocalInputReducer()');
  switch (action.type) {
    case 'PUSH_SCORE_TO_EXERCISE_SCORES_ARRAY':
      return state.exerciseScores.push(action.payload);
    case 'RESET_EXERCISE_SCORES':
      return [];
    default:
      return state;
  }
};

export default exerciseScoresReducer;
