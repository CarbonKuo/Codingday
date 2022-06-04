/** LeetCode 54. Spiral Matrix
 * @param {number[][]} matrix
 * @return {number[]} res
 */
 var spiralOrder = function(matrix) {
  if (matrix.length == 0) return [];
  let res = [];
  let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1;
  const size = matrix.length * matrix[0].length;
  while (res.length !== size) {
    for (let i = left; i <= right; i++) res.push(matrix[top][i]);
    top++;
    for (let i = top; i <= bottom; i++) res.push(matrix[i][right]);
    right--;
    if (res.length === size) break;
    for (let i = right; i >= left; i--) res.push(matrix[bottom][i]);
    bottom--;
    for (let i = bottom; i >= top; i--) res.push(matrix[i][left]);
    left++;
  }
  return res;
};