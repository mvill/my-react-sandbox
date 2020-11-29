import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initGrid } from '../../store/actions/mineSweeperViewActions';
import Grid from './Grid';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const MineSwipperView = () => {

  const dispatch = useDispatch();
  // const cpt = useSelector((state) => state.cptView.cpt);
  // const dispatch = useDispatch();

  const nbLines = 9;
  const nbCols = 9;
  const nbMines = 10;

  // init grid
  const grid = [];
  for (let i = 0; i < nbLines; i += 1) {
    const line = [];
    for (let j = 0; j < nbCols; j += 1) {
      line.push({
        mine: false,
        nbMinesAround: 0,
      });
    }
    grid.push(line);
  }

  // init mines
  for (let i = 0; i < nbMines; i += 1) {
    let done = false;
    while (!done) {
      const randomX = getRandomInt(nbCols);
      const randomY = getRandomInt(nbLines);
      const randomCell = grid[randomY][randomX];
      if (!randomCell.mine) {
        randomCell.mine = true;
        done = true;
      }
    }
  }

  // nbMinesAround
  for (let y = 0; y < nbLines; y += 1) {
    for (let x = 0; x < nbCols; x += 1) {
      let nbMinesAround = 0;
      if (y > 0) {
        // up left
        if (x > 0) {
          nbMinesAround += grid[y - 1][x - 1].mine ? 1 : 0;
        }

        // up
        nbMinesAround += grid[y - 1][x].mine ? 1 : 0;

        // up right
        if (x < nbLines - 1) {
          nbMinesAround += grid[y - 1][x + 1].mine ? 1 : 0;
        }
      }

      // left
      if (x > 0) {
        nbMinesAround += grid[y][x - 1].mine ? 1 : 0;
      }
      // right
      if (x < nbLines - 1) {
        nbMinesAround += grid[y][x + 1].mine ? 1 : 0;
      }

      if (y < nbLines - 1) {
        // down left
        if (x > 0) {
          nbMinesAround += grid[y + 1][x - 1].mine ? 1 : 0;
        }

        // down
        nbMinesAround += grid[y + 1][x].mine ? 1 : 0;

        // down right
        if (x < nbLines - 1) {
          nbMinesAround += grid[y + 1][x + 1].mine ? 1 : 0;
        }
      }

      grid[y][x].nbMinesAround = nbMinesAround;
    }
  }

  useEffect(() => {
    dispatch(initGrid(nbCols, nbLines));
  }, [dispatch]);

  const ready = useSelector((state) => state.mineSweeper.ready);

  return (
    <div>
      {ready && <Grid grid={grid} />}
    </div>
  );
};


export default MineSwipperView;