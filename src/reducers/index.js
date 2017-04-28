import { combineReducers } from 'redux';
import captureReducer from './interface';
import { Field, reduxForm } from 'redux-form';
import { reducer as reduxFormReducer } from 'redux-form';

console.log('did i hit the form');
const rootReducer = combineReducers ({
  form: reduxFormReducer,
});

export default rootReducer;
