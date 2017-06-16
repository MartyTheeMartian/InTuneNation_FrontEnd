import initialState from './initialState';

export const currentPianoNoteReducer = (state = initialState.currentPianoNote, action) => {
  switch (action.type) {
    case 'CURRENT_PIANO_NOTE':
      return action.payload;
    case 'REMOVE_PIANO_NOTE':
      return initialState.currentPianoNote;
    case 'RESET_INTERFACE':
      return initialState.currentPianoNote;
    default:
      return state;
  }
};

export const captureReducer = (state = initialState.capture, action) => {
  switch (action.type) {
    case 'TOGGLE_CAPTURE':
      if (!state.capture) {
        return {
          capture: true,
          captureText: 'End',
          disabled: '',
          resetDisabled: '',
        };
      } else if (state.capture) {
        return {
          capture: false,
          captureText: 'Key',
          disabled: 'disabled',
          resetDisabled: '',
        };
      }
    case 'RESET_INTERFACE':
      return initialState.capture;
    default:
      return state;
  }
};

export const octaveReducer = (state = initialState.octave, action) => {
  switch (action.type) {
    case 'SHIFT_OCTAVES':
      if (action.payload === '+' && state.leftOctave === 3) {
        return { leftOctave: 4, rightOctave: 5, up: 'disabled', down: '' };
      } else if (action.payload === '-' && state.leftOctave === 3) {
        return { leftOctave: 2, rightOctave: 3, up: '', down: 'disabled' };
      } else if (action.payload === '-' && state.leftOctave === 4) {
        return { leftOctave: 3, rightOctave: 4, up: '', down: '' };
      } else if (action.payload === '+' && state.leftOctave === 2) {
        return { leftOctave: 3, rightOctave: 4, up: '', down: '' };
      }
    case 'RESET_INTERFACE':
      return { leftOctave: 3, rightOctave: 4, up: '', down: '' };
    default:
      return state;
  }
};

export const navBarReducer = (state = initialState.navBar, action) => {
  switch (action.type) {
    case 'RENDER_NAVBAR':
      return true;
    default:
      return state;
  }
}
