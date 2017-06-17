import initialState from './initialState';
import {averageArr} from '../actions/index.js'
// the initialState is null

const barGraphgraphDataReducer = (state = initialState.graphData, action) => {
  switch (action.type) {
    case 'ALL_INTONATION_PER_EXERCISE_FULFILLED':
      const data = action.payload.data;
      const d3Format = data.map((obj, index) => {
        return [...JSON.parse(obj["scores_array"])];
      });
      if (d3Format.length === 0) {
        return [];
      } else {
        return {
          columns: averageArr(d3Format),

          axis: {
            y: {
              label: {
                text: 'Intonation Score',
                position: 'outer-middle'
              }
            },
            x: {
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
