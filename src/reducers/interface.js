
export const captureReducer = (state = {capture: false, captureText: 'Capture Keyboard'}, action) => {

  switch (action.type) {
    case 'TOGGLE_CAPTURE':
      if (state.capture) {
        return {capture: false, captureText: 'Capture Keyboard'};
      }
      else {
        return {capture: true, captureText: 'End Capture'};
      }
    default:
      return state;
  }
};
