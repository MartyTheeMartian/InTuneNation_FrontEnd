import recordingStatusReducer from '../../../src/reducers/recordingStatus';
import initialState from '../../../src/reducers/initialState';

describe('recordingStatusReducer', () => {
  it('returns false if passed in state that is undefined', () => {
    const nextState = recordingStatusReducer(undefined, {});
    expect(nextState).toEqual(false);
  });

  it('should return the exact same state given an unknown type', () => {
    const prevState = initialState;
    const nextState = recordingStatusReducer(prevState, { type: 'UNKNOWN' });
    expect(nextState).toBe(prevState);
  });

  it('should initially return false', () => {
    const initState = initialState;
    const firstRecordingState = recordingStatusReducer(initState, { type: 'TOGGLE_AUDIO_CAPTURE' });
    expect(firstRecordingState).toEqual(false);
  });


  it('should toggle the recording status when the proper action is provided just once', () => {
    const initState = initialState;
    const firstRecordingState = recordingStatusReducer(initState, { type: 'TOGGLE_AUDIO_CAPTURE' });
    const secondRecordingState = recordingStatusReducer(firstRecordingState, { type: 'TOGGLE_AUDIO_CAPTURE' });
    expect(secondRecordingState).toEqual(true);
  });

  it('should toggle the recording status when the proper action is provided a second time', () => {
    const initState = initialState;
    const firstRecordingState = recordingStatusReducer(initState, { type: 'TOGGLE_AUDIO_CAPTURE' });
    const secondRecordingState = recordingStatusReducer(firstRecordingState, { type: 'TOGGLE_AUDIO_CAPTURE' });
    const thirdRecordingState = recordingStatusReducer(secondRecordingState, { type: 'TOGGLE_AUDIO_CAPTURE' });
    expect(thirdRecordingState).toEqual(initState.recordingStatus);
  });

  it('should return the recording status back to false if asked to reset the interface', () => {
    const firstRecordingState = recordingStatusReducer(initialState.recordingStatus, { type: 'TOGGLE_AUDIO_CAPTURE' });
    const resetRecordingState = recordingStatusReducer(firstRecordingState, { type: 'RESET_INTERFACE' });
    expect(resetRecordingState).toEqual(false);
  });
});
