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
import { captureReducer, octaveReducer, currentPianoNoteReducer, navBarReducer } from './interface';
import signupReducer from './signUp';
import loginReducer from './login';
import dashboardReducer from './dashboard';
import singButtonReducer from './singButton';
import loadSpecificExercisesIDwithAllNotesReducer from './loadSpecificExercisesIDwithAllNotesReducer'
import googleOauthReducer from './googleOauth.js'
import sendArrayReducer from './sendArrayReducer.js'
import tuningSpecsReducer from './tuningSpecs';
// import resetStateReducer from './resetState';
import initialState from './initialState';
import graphDataReducer from './graphData';
import barGraphgraphDataReducer from './barGraphData';

const appReducer = combineReducers({
  form: formReducer,
  currentPianoNoteReducer,
  captureReducer,
  octaveReducer,
  greenTimeReducer,
  scoreReducer,
  exerciseScoresReducer,
  currentExerciseIdReducer,
  keyEventsReducer,
  targetNoteReducer,
  targetNoteIndexReducer,
  sungNoteReducer,
  recordingStatusReducer,
  singButtonReducer,
  signupReducer,
  loginReducer,
  dashboardReducer,
  graphDataReducer,
  navBarReducer,
  googleOauthReducer,
  tuningSpecsReducer,
  barGraphgraphDataReducer,
  loadSpecificExercisesIDwithAllNotesReducer,
  sendArrayReducer
});

const rootReducer = (state, action) => {
  const resetState = (JSON.parse(JSON.stringify(initialState)));
  if (action.type === 'RESET_STATE') { state = resetState; } // refactor this out?
  return appReducer(state, action);
};


export default rootReducer;
