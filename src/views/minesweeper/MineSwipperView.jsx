import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initInfoGrid } from '../../store/actions/mineSweeperViewActions';
import Grid from './Grid';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

function initGrid(width, height, nbMines) {
  // init grid
  const grid = [];
  for (let i = 0; i < height; i += 1) {
    const line = [];
    for (let j = 0; j < width; j += 1) {
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
      const randomX = getRandomInt(width);
      const randomY = getRandomInt(height);
      const randomCell = grid[randomY][randomX];
      if (!randomCell.mine) {
        randomCell.mine = true;
        done = true;
      }
    }
  }

  // nbMinesAround
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      let nbMinesAround = 0;
      if (y > 0) {
        // up left
        if (x > 0) {
          nbMinesAround += grid[y - 1][x - 1].mine ? 1 : 0;
        }

        // up
        nbMinesAround += grid[y - 1][x].mine ? 1 : 0;

        // up right
        if (x < width - 1) {
          nbMinesAround += grid[y - 1][x + 1].mine ? 1 : 0;
        }
      }

      // left
      if (x > 0) {
        nbMinesAround += grid[y][x - 1].mine ? 1 : 0;
      }
      // right
      if (x < width - 1) {
        nbMinesAround += grid[y][x + 1].mine ? 1 : 0;
      }

      if (y < height - 1) {
        // down left
        if (x > 0) {
          nbMinesAround += grid[y + 1][x - 1].mine ? 1 : 0;
        }

        // down
        nbMinesAround += grid[y + 1][x].mine ? 1 : 0;

        // down right
        if (x < width - 1) {
          nbMinesAround += grid[y + 1][x + 1].mine ? 1 : 0;
        }
      }

      grid[y][x].nbMinesAround = nbMinesAround;
    }
  }

  return grid;
}

const MineSwipperView = () => {
  // const revealedGrid = useSelector((state) => state.mineSweeper);
  const dispatch = useDispatch();
  // const cpt = useSelector((state) => state.cptView.cpt);
  // const dispatch = useDispatch();

  /*
  const height = 2;
  const width = 5;
  const nbMines = 3;
  */
  const height = 9;
  const width = 9;
  const nbMines = 10;

  const grid = initGrid(width, height, nbMines);

  useEffect(() => {
    dispatch(initInfoGrid(width, height));
    return () => {
      // alert('TODO unmount MineSwipperView');
    }
  }, []);

  const ready = useSelector((state) => state.mineSweeper.ready);

  return (
    <div>
      {
        ready && (<Grid grid={grid} />)
      }
    </div>
  );
};


export default MineSwipperView;