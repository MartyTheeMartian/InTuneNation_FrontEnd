import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import keyEventsReducer from './keyEvents';
import targetNoteReducer from './targetNote';
import targetNoteIndexReducer from './targetNoteIndex';
import sungNoteReducer from './sungNote';
import recordingStatusReducer from './recordingStatus';
import greenTimeReducer from './greenTime';
import scoreReducer from './score';
import exerciseScoresReducer from './exerciseScores';
import currentExerciseIdReducer from './currentExerciseId';
import allPastExercisesReducer from './allPastExercises';
import { captureReducer, octaveReducer, currentNoteReducer } from './interface';
import signupReducer from './signUp';
import loginReducer from './login';
import dashboard from './dashboard';
import singButtonReducer from './singButton';
import resetStateReducer from './resetState';
import initialState from './initialState';
import searchExercise from './searchAllExercises';
import allScorePerExercise from './allIntonationScorePerExercise';
import graphDataReducer from './graphData';

const appReducer = combineReducers({
  form: formReducer,
  currentNoteReducer,
  captureReducer,
  octaveReducer,
  greenTimeReducer,
  scoreReducer,
  exerciseScoresReducer,
  currentExerciseIdReducer,
  allPastExercisesReducer,
  keyEventsReducer,
  targetNoteReducer,
  targetNoteIndexReducer,
  sungNoteReducer,
  recordingStatusReducer,
  singButtonReducer,
  signupReducer,
  loginReducer,
  dashboard,
  searchExercise,
  allScorePerExercise,
  graphDataReducer,
});

const rootReducer = (state, action) => {
  let resetState = (JSON.parse(JSON.stringify(initialState)));
  if (action.type === 'RESET_STATE') {
    state = resetState;
  }
  return appReducer(state, action);
};


export default rootReducer;
