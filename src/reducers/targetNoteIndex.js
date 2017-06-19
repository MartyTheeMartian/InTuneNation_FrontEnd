import initialState from './initialState';

const targetNoteIndexReducer = (state = initialState.targetNoteIndex, action) => {
  switch (action.type) {
    case 'INCREMENT_TARGET_NOTE_INDEX':
      return state + 1;
    case 'EXERCISE_FINISHED':
      return initialState.targetNoteIndex;
    case 'RESET_INTERFACE':
      return initialState.targetNoteIndex;
    default:
      return state;
  }
};

export default targetNoteIndexReducer;
