import { combineReducers } from '@reduxjs/toolkit';
import cptViewReducer from './cptViewReducer';

const rootReducer = combineReducers({
  cptView: cptViewReducer, 
});

export default rootReducer;