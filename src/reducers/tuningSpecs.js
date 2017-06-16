import initialState from './initialState';

const tuningSpecsReducer = (state = initialState.tuningSpecs, action) => {
  switch (action.type) {
    case 'CHANGE_TUNING_SPECS':
      return action.payload;
    default:
      return state;
  }
};

export default tuningSpecsReducer;
