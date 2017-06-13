import greenTimeReducer from '../../../src/reducers/greenTime';
import initialState from '../../../src/reducers/initialState';

describe('greenTimeReducer', () => {
  it('should initially return the proper object', () => {
    const initialGreenTime = greenTimeReducer(initialState.greenTime, { type: 'UNKNOWN' });
    expect(initialGreenTime).toEqual(initialState.greenTime);
  });

  it('should return the current state with an unknown action', () => {
    const initGT = {
      accumulated: 1,
      required: 2,
    };
    const initialGreenTime = greenTimeReducer(initGT, { type: 'UNKNOWN' });
    expect(initialGreenTime).toEqual(initGT);
  });

  it('should increment the green time accumulated if the appropriate action type is supplied', () => {
    const initGT = {
      accumulated: 0,
      required: 2,
    };
    const newGreenTime = greenTimeReducer(initGT, { type: 'INCREMENT_GREEN_TIME' });
    const expectedGT = {
      accumulated: 1,
      required: 2,
    };
    expect(newGreenTime).toEqual(expectedGT);
  });

  it('should reset the green time back to zero if the appropriate action type is supplied', () => {
    const initGT = {
      accumulated: 1,
      required: 1,
    };
    const resetGT = greenTimeReducer(initGT, { type: 'RESET_GREEN_TIME' });
    expect(resetGT).toEqual(initialState.greenTime);
  });

  it('should change the green time requirement if the appropriate action type is supplied', () => {
    const amount = 5;
    const action = {
      type: 'CHANGE_GREEN_TIME_REQUIREMENT',
      amount,
    };
    const diffGT = greenTimeReducer(initialState.greenTime, action);
    const expectedGT = {
      accumulated: 0,
      required: 5,
    };
    expect(diffGT).toEqual(expectedGT);
  });

  it('should reset the green time back to zero if asked to reset the interface', () => {
    const initGT = {
      accumulated: 1,
      required: 1,
    };
    const action = { type: 'RESET_INTERFACE' };
    const resetGT = greenTimeReducer(initGT, action);
    const expectedGT = {
      accumulated: 0,
      required: 1,
    };
    expect(resetGT).toEqual(expectedGT);
  });


});
