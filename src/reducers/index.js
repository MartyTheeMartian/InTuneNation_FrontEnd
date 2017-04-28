import { combineReducers } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { reducer as reduxFormReducer } from 'redux-form';
import { captureReducer, octaveReducer, notesArrayReducer } from './interface';



const rootReducer = combineReducers ({
  form: reduxFormReducer,
  notesArrayReducer,
  captureReducer,
  octaveReducer
});

console.log('what is the rootReducer', rootReducer);

export default rootReducer;
