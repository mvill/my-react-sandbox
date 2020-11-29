/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { MINE_SWEEPER_INIT_GRID, MINE_SWEEPER_REVEAL_CELL } from '../actions/mineSweeperViewActions';

const initialState = {
  grid: null,
  ready: false,
};

const mineSweeperViewReducer = createReducer(initialState, {
  [MINE_SWEEPER_INIT_GRID]: (state, { width, height }) => {
    const grid = [];
    for (let y = 0; y < height; y += 1) {
      const line = [];
      for (let x = 0; x < width; x += 1) {
        line.push({
          revealed: false,
        });
      }
      grid.push(line);
    }

    state.grid = grid;
    state.ready = true;
  },

  [MINE_SWEEPER_REVEAL_CELL]: (state, { x, y }) => {
    state.grid[y][x].revealed = true;
  },
});

export default mineSweeperViewReducer;
