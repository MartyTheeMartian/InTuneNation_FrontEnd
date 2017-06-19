import initialState from './initialState';
// the initialState is null
import getNoteAndOctave from '../audio/getNoteAndOctave';

const graphDataReducer = (state = initialState.graphData, action) => {
  switch (action.type) {
    case 'ALL_INTONATION_PER_EXERCISE_FULFILLED':
      const data = action.payload[0].data;
      const noteArr = action.payload[1].data["notes_array"];
      let noteNameArray = JSON.parse(noteArr).map((keyNum, index) => {
        let noteObj = getNoteAndOctave(keyNum);
        return noteObj.note + ' ' + noteObj.octave + `pitch #${index}`;
      })

      const d3Format = data.map((obj, index) => {
        return [
          `Performance #${index + 1}`,
          ...JSON.parse(obj["scores_array"])
        ];
      });
      if (d3Format.length === 0) {
        return [];
      } else {
        return {
          notes: noteNameArray,
          columns: d3Format,
          axis: {
            y: {
              label: {
                text: 'Intonation Score',
                position: 'outer-middle'
              }
            },
            x: {
              label : {
                text: 'Note',
              },
              type: 'category'
            }
          }
        }
      };

    default:
      return state;
  }
};

export default graphDataReducer;
