import initialState from './initialState';

const graphDataReducer = (state = initialState.graphData, action) => {
  switch (action.type) {
    case 'ALL_INTONATION_PER_EXERCISE_FULFILLED':
      const data = action.payload.data;
      console.log('what is data', data);
      let d3Format = data.map((obj,index) => {
      return[ `Exercise ${index}`, ...JSON.parse(obj["scores_array"])];
      });
      // let d3FormatDate = data.map((obj) => {
      //   return obj["created_at"].slice(0,11);
      // })
      console.log('what is d3Format', d3Format);
      if(d3Format.length === 0){
        return "The user has not sung this exercise before.";
      } else {

        return {
          columns: d3Format,
          axis: {
            y: {
              label: {
                text: 'Y Label',
                position: 'outer-middle'
              }
            }
          }
      }
      //
      // return {
      //   columns: [
      //       ['All Average Scores', ...d3Format],
      //   ],
      // };
    };
    default:
      return state;
  }
};

export default graphDataReducer;
