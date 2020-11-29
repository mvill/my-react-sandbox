import { combineReducers } from '@reduxjs/toolkit';
import cptViewReducer from './cptViewReducer';
import mineSweeperViewReducer from './mineSweeperViewReducer';

const rootReducer = combineReducers({
  cptView: cptViewReducer,
  mineSweeper: mineSweeperViewReducer,
});

export default rootReducer;
