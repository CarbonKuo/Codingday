'use strict';

module.exports = { numMagicSquaresInside };

/**
 * @param {number[][]} grid
 * @return {number} nums
 */
function numMagicSquaresInside(grid) {
  let nums = 0;
  const ROW = grid.length;
  const COL = grid[0].length;
  if (ROW < 3 || COL < 3) return nums;

  function isMagicSquare(position) {
    let magicSquare = [];
    for (let row = position[0]; row < position[0] + 3; row++) {
      for (let col = position[1]; col < position[1] + 3; col++) {
        magicSquare.push(grid[row][col]);
      }
    }
    for (let checkIndex = 1; checkIndex <= 9; checkIndex++) {
      if (magicSquare.indexOf(checkIndex) < 0) return false;
    }
    if (
      magicSquare[0] + magicSquare[1] + magicSquare[2] === 15 &&
      magicSquare[3] + magicSquare[4] + magicSquare[5] === 15 &&
      magicSquare[6] + magicSquare[7] + magicSquare[8] === 15 &&
      magicSquare[0] + magicSquare[3] + magicSquare[6] === 15 &&
      magicSquare[1] + magicSquare[4] + magicSquare[7] === 15 &&
      magicSquare[2] + magicSquare[5] + magicSquare[8] === 15 &&
      magicSquare[0] + magicSquare[4] + magicSquare[8] === 15 &&
      magicSquare[2] + magicSquare[4] + magicSquare[6] === 15
    )
      return true;
  }

  for (let gridRow = 0; gridRow < ROW - 2; gridRow++) {
    for (let gridCol = 0; gridCol < COL - 2; gridCol++) {
      if (isMagicSquare([gridRow, gridCol])) nums++;
    }
  }
  return nums;
}
