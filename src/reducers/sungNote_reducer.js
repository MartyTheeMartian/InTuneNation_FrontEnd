import initialState from './initialState';

const sungNoteReducer = (state = initialState.sungNote, action) => {
  console.log('React/src/reducers/vocalInputResults_reducer.js/vocalInputReducer()');
  switch (action.type) {
    case 'SET_SUNG_NOTE':
      return action.payload;
    case 'RESET_SUNG_NOTE':
      return {
        frequency: null,
        name: null,
        centDiff: null,
      };
    default:
      return state;
  }
};

export default sungNoteReducer;
