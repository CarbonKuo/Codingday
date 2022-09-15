'use strict';

module.exports = { numIslands };

/**
 * @param {character[][]} grid
 * @return {number} count
 */
function numIslands(grid) {
  let heightOfIsland = grid.length;
  let wdithOfIsland = grid[0].length;
  let count = 0;
  for (let height = 0; height < heightOfIsland; height++) {
    for (let wdith = 0; wdith < wdithOfIsland; wdith++) {
      if (grid[height][wdith] === '1') {
        count++;
        sinkIsland(height, wdith, grid, heightOfIsland, wdithOfIsland);
      }
    }
  }
  return count;
}

function sinkIsland(height, wdith, grid, heightOfIsland, wdithOfIsland) {
  if (height < 0 || height >= heightOfIsland || wdith < 0 || wdith >= wdithOfIsland || grid[height][wdith] === '0')
    return;
  grid[height][wdith] = '0';
  sinkIsland(height, wdith + 1, grid, heightOfIsland, wdithOfIsland);
  sinkIsland(height, wdith - 1, grid, heightOfIsland, wdithOfIsland);
  sinkIsland(height + 1, wdith, grid, heightOfIsland, wdithOfIsland);
  sinkIsland(height - 1, wdith, grid, heightOfIsland, wdithOfIsland);
}
