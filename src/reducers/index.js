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

export default rootReducer;
