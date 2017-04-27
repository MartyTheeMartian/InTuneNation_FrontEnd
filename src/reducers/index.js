import { combineReducers } from 'redux';
import { captureReducer, octaveReducer, notesArrayReducer } from './interface';


const rootReducer = combineReducers ({
  notesArrayReducer, 
  captureReducer,
  octaveReducer

});

export default rootReducer;
