import googleOauthReducer from '../../../src/reducers/loadSpecificExercisesIDwithAllNotesReducer.js';

describe('loadSpecificExercisesIDwithAllNotesReducer', function() {
  it('returns an empty object if passed in state that is undefined', function() {
    const nextState = loadSpecificExercisesIDwithAllNotesReducer(undefined, {});
    expect(nextState).toEqual({});
  });

  it('returns the exact same state given an unknown type (i.e., does not modify the state)', function() {
    const prevState = {};
    const nextState = loadSpecificExercisesIDwithAllNotesReducer(prevState, {type: 'FOOBAR'});
    expect(nextState).toBe(prevState);
    expect(nextState).not.toEqual(prevState);
  });

  it('returns a new state with the specified articles set on it', function() {
    const prevState = {};
    const action = {
      type: 'LOAD_PROFILE',
      payload: {

      }
    }
    const nextState = googleOauthReducer(prevState, action);
    expect(nextState).not.toBe(prevState);
    expect(nextState).toEqual( {
      
    } );
  });
});
