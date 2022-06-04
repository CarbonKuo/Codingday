/** LeetCode 1091. Shortest Path in Binary Matrix
 * @param {number[][]} grid
 * @return {number}
 */
 var shortestPathBinaryMatrix = function(grid) {
  let depth = 0;
  let m = grid.length - 1;
  if (grid[0][0] == 1 || grid[m][m] == 1) return -1;
  if (m == 0) return 1;
  let queue = [[0, 0]];
  grid[0][0] = 1;
  let directions = [
    // vertical up
    [0, -1],
    // vertical down
    [0, 1],
    // left
    [-1, 0],
    // right
    [1, 0],
    // top left
    [-1, -1],
    // down left
    [-1, 1],
    // top right
    [1, -1],
    // down right
    [1, 1],
  ];
  while (queue.length) {
    depth++;
    let size = queue.length;
    while (size--) {
      let [x, y] = queue.shift();
      if (x == m && y == m) return depth;
      for (let dir of directions) {
        let curX = x + dir[0], curY = y + dir[1];
        if (curX > m || curY > m || curX < 0 || curY < 0 || grid[curX][curY] == 1) continue;
        queue.push([curX, curY]);
        grid[curX][curY] = 1;
      }
    }
  }
  return -1;
};