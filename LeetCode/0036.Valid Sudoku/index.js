'use strict';

module.exports = { isValidSudoku };

/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
  let row = new Set();
  let col = new Set();
  let box = new Set();

  for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
    for (let colIndex = 0; colIndex < 9; colIndex++) {
      if (board[rowIndex][colIndex] === '.') continue;

      let boxIndex = Math.floor(rowIndex / 3) * 3 + Math.floor(colIndex / 3);

      if (row.has(rowIndex + board[rowIndex][colIndex])) return false;
      if (col.has(colIndex + board[rowIndex][colIndex])) return false;
      if (box.has(boxIndex + board[rowIndex][colIndex])) return false;

      row.add(rowIndex + board[rowIndex][colIndex]);
      col.add(colIndex + board[rowIndex][colIndex]);
      box.add(boxIndex + board[rowIndex][colIndex]);
    }
  }
  return true;
}
