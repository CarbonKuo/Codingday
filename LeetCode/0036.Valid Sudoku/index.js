'use strict';

module.exports = { isValidSudoku };

/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
  const row = new Set();
  const col = new Set();
  const box = new Set();

  for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
    for (let colIndex = 0; colIndex < 9; colIndex++) {
      if (board[rowIndex][colIndex] === '.') continue;

      const boxIndex = Math.floor(rowIndex / 3) * 3 + Math.floor(colIndex / 3);
      const rowValue = `${rowIndex} ${board[rowIndex][colIndex]}`;
      const colValue = `${colIndex} ${board[rowIndex][colIndex]}`;
      const boxValue = `${boxIndex} ${board[rowIndex][colIndex]}`;

      if (row.has(rowValue)) return false;
      row.add(rowValue);
      if (col.has(colValue)) return false;
      col.add(colValue);
      if (box.has(boxValue)) return false;
      box.add(boxValue);
    }
  }
  return true;
}
