import React from 'react';
import Cell from './Cell';

const Grid = ({ grid }) => {
  console.log('TODO');
  return (
    <table>
      {grid.map((line, y) => (
        <tr key={`line-${y}`}>
          {
            line.map((cell, x) => (
              <Cell
                key={`cell-${y}-${x}`}
                x={x}
                y={y}
                cell={cell}
              />
            ))
          }
        </tr>
      ))}
    </table>
  );
};

export default Grid;
