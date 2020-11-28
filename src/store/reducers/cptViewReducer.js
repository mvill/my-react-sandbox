/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { CPT_VIEW_INCREMENT } from '../actions/cptViewActions';

const initialState = {
  cpt: 10,
};

const cptViewReducer = createReducer(initialState, {
  [CPT_VIEW_INCREMENT]: (state) => {
    state.cpt += 1;
  },
});

export default cptViewReducer;
