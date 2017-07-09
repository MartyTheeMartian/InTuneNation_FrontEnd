import initialState from './initialState';

export const stepsEnabledReducer = (state = initialState.stepsEnabled, action) => {
  switch (action.type) {
    case 'TOGGLE_STEPS':
      return !state;
    default:
      return state;
  }
};

export const initialStepReducer = (state = initialState.initialStep, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const stepsReducer = (state = initialState.steps, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const introTriggeredReducer = (state = initialState.introTriggered, action) => {
  switch (action.type) {
    case 'INTRO_TRIGGERED':
      return !state;
    default:
      return state;
  }
};
