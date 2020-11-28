import { createReducer } from '@reduxjs/toolkit';
import { CPT_VIEW_INCREMENT } from '../actions/cptViewActions';

const initialState = {
  cpt: 10,
}

/*
function cptViewReducer(state = initialState, action) {
  switch (action.type) {
    case CPT_VIEW_INCREMENT:
      return {
        ...state,
        cpt: state.cpt + 1
      };
    default:
      return state
  }
}
*/


const cptViewReducer = createReducer(initialState, {
  [CPT_VIEW_INCREMENT]: (state, action) => {
    state.cpt++;
  }
});



export default cptViewReducer;