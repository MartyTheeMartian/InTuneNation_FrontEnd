import initialState from './initialState';

const targetNoteIndexReducer = (state = initialState.targetNoteIndex, action) => {
  switch (action.type) {
    case 'INCREMENT_TARGET_NOTE_INDEX':
      return state + 1;
    case 'RESET_TARGET_NOTE_INDEX':
      return 0;
    default:
      return state;
  }
};

export default targetNoteIndexReducer;
