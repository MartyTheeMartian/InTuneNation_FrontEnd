import scoreReducer from '../../../src/reducers/score';
import exerciseScoresReducer from '../../../src/reducers/exerciseScores';
import initialState from '../../../src/reducers/initialState';

describe('score-related reducers', () => {
  describe('scoreReducer', () => {
    it('initially returns a score of 100', () => {
      expect(initialState.score).toEqual(100);
    });

    it('should return the state as specified given an unknown action', () => {
      const action = { type: 'UNKNOWN' };
      const score = scoreReducer(90, action);
      expect(score).toEqual(90);
    });

    it('should decrement the score when given an action specifying that result', () => {
      const amount = 2;
      const action = {
        type: 'DECREMENT_SCORE',
        amount,
      };
      const decrementedScore = scoreReducer(initialState.score, action);
      expect(decrementedScore).toEqual(98);
    });

    it('should reset the score to zero when specifically asked to within the action', () => {
      const action = { type: 'RESET_SCORE' };
      const resetScore = scoreReducer(90, action);
      expect(resetScore).toEqual(100);
    });

    it('should reset the score to zero when asked to reset the interface', () => {
      const action = { type: 'RESET_INTERFACE' };
      const resetScore = scoreReducer(90, action);
      expect(resetScore).toEqual(100);
    });
  });

  describe('exerciseScoresReducer', () => {
    it('should initially return an empty array', () => {
      const action = { type: 'UNKNOWN' };
      const scoresArray = exerciseScoresReducer(initialState.exerciseScores, action);
      expect(scoresArray).toEqual([]);
    });

    it('should return the current array in state given an unknown action type', () => {
      const action = { type: 'UNKNOWN' };
      const scoresArray = exerciseScoresReducer([90, 80], action);
      expect(scoresArray).toEqual([90, 80]);
    });

    it('should add a score to the array if specified with the appropriate action', () => {
      const action = {
        type: 'PUSH_SCORE_TO_EXERCISE_SCORES_ARRAY',
        payload: 85,
      };
      const scoresArray = exerciseScoresReducer([90, 80], action);
      expect(scoresArray).toEqual([90, 80, 85]);
    });

    it('should return an empty array when specified to reset the interface', () => {
      const action = { type: 'RESET_INTERFACE' };
      const resetArray = exerciseScoresReducer([90, 80, 85], action);
      expect(resetArray).toEqual([]);
    });
  });
});
