import initialState from './initialState';
import {averageArr} from '../actions/index.js'
// the initialState is null

const barGraphgraphDataReducer = (state = initialState.graphData, action) => {
  switch (action.type) {
    case 'ALL_INTONATION_PER_EXERCISE_FULFILLED':
      const scoreData = action.payload.data
      const d3Format = scoreData.map((obj, index) => {
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
