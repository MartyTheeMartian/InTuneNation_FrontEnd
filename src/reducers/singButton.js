import initialState from './initialState';

export const singButtonReducer = (state = initialState.singButton, action) => {
  switch (action.type) {
    case 'TOGGLE_SING_BUTTON':
      return { singText: 'Sing', disabled: false };
    // case 'BEGIN_NEW_EXERCISE':
    //   return { singText: 'Sing', disabled: false }; // may introduce bugs related to redoing exercise after finishing it once, but intended to allow that to occur
    case 'EXERCISE_FINISHED':
      return { singText: 'Repeat Ex', disabled: false };
    case 'RESET_INTERFACE':
      return initialState.singButton;
    default:
      return state;
  }
};

export default singButtonReducer;
