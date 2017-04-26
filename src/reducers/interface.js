
export const captureReducer = (state = {capture: false}, action) => {

  console.log('Yo');

  switch (action.type) {
    case 'TOGGLE_CAPTURE':
      console.log(state);
    default:
      return state;
  }
};
