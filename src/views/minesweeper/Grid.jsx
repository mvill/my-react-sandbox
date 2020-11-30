/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInfoCell } from '../../store/actions/mineSweeperViewActions';

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

const getCellColor = (cell) => {
  if (cell.mine) {
    return 'black';
  }
  return COLOR_MAP[cell.nbMinesAround];
}

const Grid = ({ grid }) => {
  const infoGrid = useSelector((state) => state.mineSweeper.infoGrid);
  const dispatch = useDispatch();




  function onContextMenu(evt) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  function onMouseUp(evt, x, y) {
    const { nativeEvent } = evt;
    if (nativeEvent.buttons > 0) {
      alert('TODO both click');
    } else {
      if (nativeEvent.which === 1) {
        doCellLeftClick(x, y);
      } else if (nativeEvent.which === 3) {
        doCellRightClick(x, y);
      }
    }
  }

  function doCellRightClick(x, y) {
    const infoCell = infoGrid[y][x];
    if (!infoCell.revealed) {
      dispatch(setInfoCell(x, y, {
        ...infoCell,
        flagged: !infoCell.flagged,
      }));
    }
  }

  function doCellLeftClick(x0, y0) {
    const cellsToReveal = [];
    const doRevealCell = (x, y) => {
      if (
        x < 0 || x >= grid[0].length ||
        y < 0 || y >= grid.length
      ) {
        return;
      }

      // if alreadyProcessed
      if (cellsToReveal.find((cell) => cell.x === x && cell.y === y)) {
        return;
      }
      const cell = grid[y][x];
      const { revealed } = infoGrid[y][x];
      if (revealed) {
        return;
      }
      cellsToReveal.push({ x, y });
      if (!cell.mine && cell.nbMinesAround === 0) {
        // si pas de mine autour propager aux voisins
        doRevealCell(x - 1, y - 1);
        doRevealCell(x - 1, y);
        doRevealCell(x - 1, y + 1);
        doRevealCell(x, y - 1);
        doRevealCell(x, y + 1);
        doRevealCell(x + 1, y - 1);
        doRevealCell(x + 1, y);
        doRevealCell(x + 1, y + 1);
      }
    };
    doRevealCell(x0, y0);
    cellsToReveal.forEach((cell) => {
      const infoCell = infoGrid[cell.y][cell.x];
      dispatch(setInfoCell(cell.x, cell.y, {
        ...infoCell,
        revealed: true,
      }));
    });
  }

  function renderCell(x, y) {
    const cell = grid[y][x];
    const { revealed, flagged } = infoGrid[y][x];
    return (
      <td
        key={`cell-${x}-${y}`}
        style={{
          border: 'black solid 1px',
          width: '30px',
          height: '30px',
          textAlign: 'center',
          fontWeight: '800',
          color: getCellColor(cell),
        }}
        onContextMenu={onContextMenu}
        onMouseUp={(evt) =>  onMouseUp(evt, x, y)}
      >
        {
          revealed ? (
            <>
              {cell.mine && '*'}
              {!cell.mine && cell.nbMinesAround}
            </>
          ) : (
              flagged && 'P'
            )
        }
      </td>
    )
  }

  return (
    <div>
      <table>
        <tbody>
          {grid.map((line, y) => (
            <tr key={`line-${y}`}>
              {
                line.map((cell, x) => renderCell(x, y))
              }
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Grid;
