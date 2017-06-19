import initialState from './initialState';
import {averageArr} from '../actions/index.js'
import getNoteAndOctave from '../audio/getNoteAndOctave';

// the initialState is null

const barGraphgraphDataReducer = (state = initialState.graphData, action) => {
  switch (action.type) {
    case 'ALL_INTONATION_PER_EXERCISE_FULFILLED':
      const scoreData = action.payload[0].data;
      const noteArr = action.payload[1].data["notes_array"];
      let noteNameArray = JSON.parse(noteArr).map((keyNum, index) => {
        let noteObj = getNoteAndOctave(keyNum);
        return noteObj.note + ' ' + noteObj.octave + `pitch #${index}`;
      })
      const d3Format = scoreData.map((obj, index) => {
        return [...JSON.parse(obj["scores_array"])];
      });
      if (d3Format.length === 0) {
        return [];
      } else {
        return {
          notes: noteNameArray,
          columns: averageArr(d3Format),
          axis: {
            y: {
              label: {
                text: 'Average Intonation Score',
                position: 'outer-middle'
              },
              tick: {
                rotate: 175
              }
            },
            x: {
              label: {
                text: 'Note'
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

export default barGraphgraphDataReducer;
