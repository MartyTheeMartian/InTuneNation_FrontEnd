import initialState from './initialState';
// the initialState is null

const barGraphgraphDataReducer = (state = initialState.graphData, action) => {
  switch (action.type) {
    case 'ALL_INTONATION_PER_EXERCISE_BARGRAPH_FULFILLED':
      const data = action.payload.data;
      console.log('payloaddata==========',data)
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

          // axis: {
          //   y: {
          //     label: {
          //       text: 'Intonation Score',
          //       position: 'outer-middle'
          //     }
          //   }
          // }
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
