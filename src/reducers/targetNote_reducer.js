import initialState from './initialState';

const targetNoteReducer = (state = initialState.targetNote, action) => {
  console.log('React/src/reducers/vocalInputResults_reducer.js/vocalInputReducer()');
  switch (action.type) {
    case 'SET_KEY_EVENT_AS_TARGET_NOTE':
      return action.payload;
    default:
      return state;
  }
};

export default targetNoteReducer;
