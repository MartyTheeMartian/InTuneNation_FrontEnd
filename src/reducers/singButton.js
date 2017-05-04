import initialState from './initialState';

export const singButtonReducer = (state = initialState.singButton, action) => {
  switch (action.type) {
    case 'TOGGLE_SING_BUTTON':
      return { singText: 'Sing', disabled: false };
    default:
      return state;
  }
};

export default singButtonReducer;
