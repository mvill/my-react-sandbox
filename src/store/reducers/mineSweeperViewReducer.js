/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { MINE_SWEEPER_INIT_INFO_GRID, MINE_SWEEPER_SET_INFO_CELL } from '../actions/mineSweeperViewActions';

const initialState = {
  infoGrid: null,
  ready: false,
};

const mineSweeperViewReducer = createReducer(initialState, {
  [MINE_SWEEPER_INIT_INFO_GRID]: (state, { width, height }) => {
    const infoGrid = [];
    for (let y = 0; y < height; y += 1) {
      const line = [];
      for (let x = 0; x < width; x += 1) {
        line.push({
          revealed: false,
          flagged: false,
        });
      }
      infoGrid.push(line);
    }

    state.infoGrid = infoGrid;
    state.ready = true;
  },

  [MINE_SWEEPER_SET_INFO_CELL]: (state, { x, y, infoCell }) => {
    state.infoGrid[y][x] = infoCell;
  },
});

export default mineSweeperViewReducer;
