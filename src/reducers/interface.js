
export const captureReducer = (state = {capture: false}, action) => {

  console.log('Yo');

  switch (action.type) {
    case 'TOGGLE_CAPTURE':
      return action;
      console.log(state);
    default:
      return state;
  }
};
