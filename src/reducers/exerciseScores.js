import initialState from './initialState';

const exerciseScoresReducer = (state = initialState.exerciseScores, action) => {
  switch (action.type) {
    case 'PUSH_SCORE_TO_EXERCISE_SCORES_ARRAY':
      return [...state, action.payload];
    case 'REPEAT_EXERCISE':
      return initialState.exerciseScores;
    case 'RESET_INTERFACE':
      return initialState.exerciseScores;
    default:
      return state;
  }
};

export default exerciseScoresReducer;
