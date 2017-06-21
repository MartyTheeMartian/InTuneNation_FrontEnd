import dashboardReducer from '../../../src/reducers/dashboard.js';

describe('dashboardReducer', function() {
  it('returns an empty object if passed in state that is undefined', function() {
    const nextState = dashboardReducer(undefined, []);
    expect(nextState).toEqual([]);
  });

  it('returns the exact same state given an unknown type (i.e., does not modify the state)', function() {
    const prevState = [];
    const action = {
      type: 'NULL'
    };
    const nextState = dashboardReducer(prevState, action);
    expect(nextState).toBe(prevState);
  });

  it('returns a new state with the specified speicific user id and exercise id set on it', function() {
    const prevState = [];
    const action = {
      type: 'PAST_EXERCISES_TABLE_RUN_FULFILLED',
      payload: [{
        id: 99,
        user_id: 8,
        notes_array: "[40,42]",
        created_at: "2017-06-19T21:45:32.448Z",
        updated_at: "2017-06-19T21:45:32.448Z"
      }]
    };
    const nextState = dashboardReducer(prevState, action);
    expect(nextState).not.toBe(prevState);
    expect(nextState).toEqual([
      {
        id: 99,
        user_id: 8,
        notes_array: "[40,42]",
        created_at: "2017-06-19T21:45:32.448Z",
        updated_at: "2017-06-19T21:45:32.448Z"
      }
    ]);
  });
});
