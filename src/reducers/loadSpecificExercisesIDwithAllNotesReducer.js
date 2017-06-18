import initialState from './initialState';
import getNoteAndOctave from '../audio/getNoteAndOctave.js'
const loadSpecificExercisesIDwithAllNotesReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ALL_NOTE_PER_EXERCISE_FULFILLED':
      let returnArr = JSON.parse(action.payload.data.notes_array);
      console.log('returnArr', returnArr);
      return returnArr.map(ele => {
        return getNoteAndOctave(ele).note;
      });
    default:
      return state;
  }
};

export default loadSpecificExercisesIDwithAllNotesReducer;
