import initialState from './initialState';

const targetNoteIndexReducer = (state = initialState.targetNoteIndex, action) => {
  // console.log('React/src/reducers/vocalInputResults_reducer.js/vocalInputReducer()');
  switch (action.type) {
    case 'INCREMENT_TARGET_NOTE_INDEX':
      return state.targetNoteIndex + 1;
    case 'RESET_TARGET_NOTE_INDEX':
      return 0;
    default:
      return state;
  }
};

export default targetNoteIndexReducer;
