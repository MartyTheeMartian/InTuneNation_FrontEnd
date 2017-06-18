import initialState from './initialState';
// the initialState is null

const graphDataReducer = (state = initialState.graphData, action) => {
  switch (action.type) {
    case 'ALL_INTONATION_PER_EXERCISE_FULFILLED':
      const data = action.payload.data;
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
                text: 'Music Note',
                position: 'outer-middle'
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
