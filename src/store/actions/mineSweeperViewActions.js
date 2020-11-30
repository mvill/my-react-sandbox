export const MINE_SWEEPER_INIT_INFO_GRID = 'MINE_SWEEPER_INIT_INFO_GRID';
export const MINE_SWEEPER_SET_INFO_CELL = 'MINE_SWEEPER_SET_INFO_CELL';

export const initInfoGrid = (width, height) => ({
  type: MINE_SWEEPER_INIT_INFO_GRID,
  width,
  height,
});

export const setInfoCell = (x, y, infoCell) => ({
  type: MINE_SWEEPER_SET_INFO_CELL,
  x,
  y,
  infoCell,
});
