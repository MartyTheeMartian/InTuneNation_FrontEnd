import dashboardReducer from '../../../src/reducers/dashboard.js';

describe('dashboardReducer', function() {
  it('returns an empty object if passed in state that is undefined', function() {
    const nextState = dashboardReducer(undefined, []);
    expect(nextState).toEqual([]);
  });

  it('returns the exact same state given an unknown type (i.e., does not modify the state)', function() {
    const prevState = [];
    const action = { type: 'NULL' };
    const nextState = dashboardReducer(prevState, action);
    expect(nextState).toBe(prevState);
  });

it('returns a new state with the specified speicific user id and exercise id set on it', function() {
  const prevState = [];
  const action = { type: 'PAST_EXERCISES_TABLE_RUN' };
  const nextState = dashboardReducer(prevState, action);

    expect(nextState).not.toBe(prevState);
    expect(nextState).toEqual(
      [{
      id: 2,
      user_id: 2 ,
      notes_array: "[28,31,35,40]",
      created_at: "2016-06-29T14:26:16.000Z",
      updated_at: "2016-06-29T14:26:16.000Z"
    }]);
  });
});
