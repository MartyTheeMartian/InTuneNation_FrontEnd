import initialState from './initialState';

export const stepsEnabledReducer = (state = initialState.stepsEnabled, action) => {
  switch (action.type) {
    case 'TOGGLE_STEPS':
      return !state.stepsEnabled;
    default:
      return state;
  }
};
