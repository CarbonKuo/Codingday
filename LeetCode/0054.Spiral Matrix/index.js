'use strict';

module.exports = { spiralOrder };

/**
 * @param {number[][]} matrix
 * @return {number[]} result
 */
function spiralOrder(matrix) {
  const result = [];

  if (!matrix.length || !matrix[0].length) return result;

  let left = 0;
  let top = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;
    if (left <= right && top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }

  return result;
}
