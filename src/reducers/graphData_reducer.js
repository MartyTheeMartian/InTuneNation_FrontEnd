import initialState from './initialState';

const graphDataReducer = (state = initialState.graphData, action) => {
  switch (action.type) {
    case 'ALL_INTONATION_PER_EXERCISE_FULFILLED':
      const data = action.payload.data;
      let d3Format = data.map((obj) => {
        return obj.avg_score;
      });
      console.log('what is d3Format', d3Format);
      if(d3Format.length === 0){
        return "user hasn't sing yet"
      } else {
        return {
          columns: [
              ['All Average Scores', ...d3Format],
          ],
        };
      }
      //
      // return {
      //   columns: [
      //       ['All Average Scores', ...d3Format],
      //   ],
      // };
    default:
      return state;
  }
};

export default graphDataReducer;
