import recordingStatusReducer from '../../src/reducers/recordingStatus';
import initialState from '../../src/reducers/initialState';
import toggleAudioCapture from '../../src/actions/index';

describe('recordingStatusReducer', () => {
  it('returns an empty object if passed in state that is undefined', () => {
    const nextState = recordingStatusReducer(undefined, {});
    expect(nextState).toEqual({});
  });

  it('should return the exact same state given an unknown type', () => {
    const prevState = initialState;
    const nextState = recordingStatusReducer(prevState, { type: 'UNKNOWN' });
    expect(nextState).toBe(prevState);
  });

});
