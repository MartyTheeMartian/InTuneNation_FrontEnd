import initialState from './initialState';

const sungNoteReducer = (state = initialState.sungNote, action) => {
  switch (action.type) {
    case 'SET_SUNG_NOTE':
      return action.payload;
    case 'RESET_INTERFACE':
      return initialState.sungNote;
    default:
      return state;
  }
};

export default sungNoteReducer;
