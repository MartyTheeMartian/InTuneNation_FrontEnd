import initialState from './initialState';

const recordingStatusReducer = (state = initialState.recordingStatus, action) => {
  switch (action.type) {
    case 'TOGGLE_AUDIO_CAPTURE':
        return !state;
    default:
      return state;
  }
};

export default recordingStatusReducer;
