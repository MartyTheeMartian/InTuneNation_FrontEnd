export const resetStateReducer = (state = '', action) => {
  switch (action.type) {
    case 'RESET_STATE':
      return action.type;
    default:
      return state;
  }
};
