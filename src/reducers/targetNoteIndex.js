import initialState from './initialState';

const targetNoteIndexReducer = (state = initialState.targetNoteIndex, action) => {
  switch (action.type) {
    case 'INCREMENT_TARGET_NOTE_INDEX':
      return state + 1;
    case 'RESET_INTERFACE':
      return initialState.targetNoteIndex;
    default:
      return state;
  }
};

export default targetNoteIndexReducer;
