import initialState from './initialState';
import {averageArr} from '../actions/index.js'
// the initialState is null

const barGraphgraphDataReducer = (state = initialState.graphData, action) => {
  // console.log('action is JKEVINNNN', action.payload);
  switch (action.type) {
    case 'ALL_INTONATION_PER_EXERCISE_FULFILLED':
    // console.log('what is payload', action.payload);
      const scoreData = action.payload.data
      // const noteData = action.payload.noteData.datta;

      const d3Format = scoreData.map((obj, index) => {
        // console.log('where is OBJJJJJJ', obj);
        return [...JSON.parse(obj["scores_array"])];
      });

      // console.log('what is noteData',noteData);
      // const noteResult = noteData.data.map)
      if (d3Format.length === 0) {
        return [];
      } else {
        return {

          columns: averageArr(d3Format),

          axis: {
            y: {
              label: {
                text: 'Average Intonation Score',
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

export default barGraphgraphDataReducer;

// import initialState from './initialState';
//
// const allScorePerExercise = (state = initialState.graphData, action) => {
//   switch (action.type) {
//     case 'ALL_INTONATION_PER_EXERCISE_FULFILLED':
//       return action.payload.data;
//     default:
//       return state;
//   }
// };
//
// export default allScorePerExercise;
