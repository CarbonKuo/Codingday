'use strict';

module.exports = { numIslands };

/**
 * @param {character[][]} grid
 * @return {number} count
 */
function numIslands(grid) {
  const Island = grid;
  const heightOfIsland = Island.length;
  const widthOfIsland = Island[0].length;
  let count = 0;
  for (let height = 0; height < heightOfIsland; height++) {
    for (let width = 0; width < widthOfIsland; width++) {
      if (Island[height][width] === '1') {
        count++;
        sinkIsland(height, width, Island);
      }
    }
  }
  return count;
}

function sinkIsland(height, width, Island) {
  if (
    height < 0 ||
    height === Island.length ||
    width < 0 ||
    width === Island[0].length ||
    Island[height][width] === '0'
  )
    return -1;
  Island[height][width] = '0';
  sinkIsland(height, width + 1, Island);
  sinkIsland(height, width - 1, Island);
  sinkIsland(height + 1, width, Island);
  sinkIsland(height - 1, width, Island);
}
