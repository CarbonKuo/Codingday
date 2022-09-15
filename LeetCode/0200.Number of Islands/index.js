'use strict';

module.exports = { numIslands };

/**
 * @param {character[][]} grid
 * @return {number} count
 */
function numIslands(grid) {
  const Island = grid;
  const heightOfIsland = Island.length;
  const wdithOfIsland = Island[0].length;
  let count = 0;
  for (let height = 0; height < heightOfIsland; height++) {
    for (let wdith = 0; wdith < wdithOfIsland; wdith++) {
      if (Island[height][wdith] === '1') {
        count++;
        sinkIsland(height, wdith, Island);
      }
    }
  }
  return count;
}

function sinkIsland(height, wdith, Island) {
  if (
    height < 0 ||
    height === Island.length ||
    wdith < 0 ||
    wdith === Island[0].length ||
    Island[height][wdith] === '0'
  )
    return -1;
  Island[height][wdith] = '0';
  sinkIsland(height, wdith + 1, Island);
  sinkIsland(height, wdith - 1, Island);
  sinkIsland(height + 1, wdith, Island);
  sinkIsland(height - 1, wdith, Island);
}
