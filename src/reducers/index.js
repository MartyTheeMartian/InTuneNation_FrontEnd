import { combineReducers } from 'redux';
import keyEventsReducer from './keyEvents_reducer';
import targetNoteReducer from './targetNote_reducer';
import targetNoteIndexReducer from './targetNoteIndex_reducer';
import sungNoteReducer from './sungNote_reducer';
import vocalInputReducer from './vocalInputResults_reducer';
import recordingStatusReducer from './recordingStatus_reducer';
import greenTimeReducer from './greenTime_reducer';
import { captureReducer, octaveReducer, notesArrayReducer } from './interface';
import { Field, reduxForm } from 'redux-form';
import { reducer as formReducer } from 'redux-form';
import  signup  from './signup-login';

console.log('did i import signup?', signup);
const rootReducer = combineReducers({
  form: formReducer,
  notesArrayReducer,
  captureReducer,
  octaveReducer,
  greenTimeReducer,
  keyEventsReducer,
  targetNoteReducer,
  targetNoteIndexReducer,
  sungNoteReducer,
  vocalInputReducer,
  recordingStatusReducer,
  signup: signup
});


export default rootReducer;
