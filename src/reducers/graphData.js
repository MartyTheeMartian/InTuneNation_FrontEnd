import initialState from './initialState';
//the initialState is null

const graphDataReducer = (state = null, action) => {
  switch (action.type) {
    case 'ALL_INTONATION_PER_EXERCISE_FULFILLED':
      const data = action.payload.data;
      // console.log('what is data', data);
      let d3Format = data.map((obj, index) => {
        return [
          `Exercise ${index}`, ...JSON.parse(obj["scores_array"])
        ];
      });
      // console.log('what is d3Format', d3Format);
      // console.log('what is d3format length', d3Format.length);
      console.log('what is d3Format',d3Format);
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
            }
          }
        }

      };
    default:
      return state;
  }
};

export default graphDataReducer;
