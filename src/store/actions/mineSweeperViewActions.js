export const MINE_SWEEPER_INIT_GRID = 'MINE_SWEEPER_INIT_GRID';
export const MINE_SWEEPER_REVEAL_CELL = 'MINE_SWEEPER_REVEAL_CELL';

export const initGrid = (width, height) => ({
  type: MINE_SWEEPER_INIT_GRID,
  width,
  height,
});

export const revealCell = (x, y) => ({
  type: MINE_SWEEPER_REVEAL_CELL,
  x,
  y,
});
