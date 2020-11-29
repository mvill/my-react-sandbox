import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { revealCell } from '../../store/actions/mineSweeperViewActions';

const COLOR_MAP = {
  0: 'gray',
  1: 'blue',
  2: 'green',
  3: 'red',
  4: 'purple',
  5: 'purple',
  6: 'purple',
  7: 'purple',
  8: 'purple',
};

const Cell = ({ cell, x, y }) => {
  const revealed = useSelector((state) => state.mineSweeper.grid[y][x].revealed);
  const dispatch = useDispatch();

  function renderCellContent() {
    if (cell.mine) {
      return '*';
    }
    return (
      <span
        style={{
          color: COLOR_MAP[cell.nbMinesAround],
          fontWeight: '800',
        }}
      >
        {cell.nbMinesAround}
      </span>
    );
  }

  function handleClick() {
    if (!revealed) {
      dispatch(revealCell(x, y));
    }
  }

  return (
    <td
      style={{ border: 'black solid 1px', width: '30px', height: '30px', textAlign: 'center' }}
      onClick={handleClick}
    >
      {revealed && renderCellContent()}
    </td>
  )
}

export default Cell;