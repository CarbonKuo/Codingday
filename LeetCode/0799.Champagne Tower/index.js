'use strict';

module.exports = { champagneTower };

/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
function champagneTower(poured, query_row, query_glass) {
  let glassCups = [poured];
  for (let row = 1; row <= query_row; row++) {
    let nextRow = new Array(glassCups.length + 1).fill(0);
    for (let slip = 0; slip < row; slip++) {
      const volume = glassCups[slip];
      if (volume > 1) {
        nextRow[slip] += (volume - 1) / 2;
        nextRow[slip + 1] += (volume - 1) / 2;
      }
    }
    glassCups = nextRow;
  }
  return Math.min(1, glassCups[query_glass]);
}
