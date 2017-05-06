import initialState from './initialState';

const graphDataReducer = (state = initialState.graphData, action) => {
  switch (action.type) {
    case 'ALL_INTONATION_PER_EXERCISE_FULFILLED':
      const data = action.payload.data;
      let d3Format = data.map((obj) => {
        return obj.avg_score;
      });
      return {
        columns: [
            ['All Average Scores', ...d3Format],
        ],
      };
    default:
      return state;
  }
};

export default graphDataReducer;
