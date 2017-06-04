import initialState from './initialState';
// the initialState is null

const graphDataReducer = (state = initialState.graphData, action) => {
  switch (action.type) {
    case 'ALL_INTONATION_PER_EXERCISE_FULFILLED':
      const data = action.payload.data;
      const d3Format = data.map((obj, index) => {
        return [
          `Exercise ${index}`, ...JSON.parse(obj.scores_array),
        ];
      });
      if (d3Format.length === 0) {
        return [];
      } else {
        return {
          columns: d3Format,
          axis: {
            y: {
              label: {
                text: 'Intonation Score',
                position: 'outer-middle',
              },
            },
          },
        };
      }
    default:
      return state;
  }
};

export default graphDataReducer;
