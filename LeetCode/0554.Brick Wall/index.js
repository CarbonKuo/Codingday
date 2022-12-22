'use strict';

module.exports = { leastBricks };
/**
 * @param {number[][]} wall
 * @return {number}
 */
function leastBricks(wall) {
  const sumRowSectionMap = new Map();
  let commonSection = 0;
  for (let widths of wall) {
    let sum = 0;
    for (let i = 0; i < widths.length - 1; i++) {
      sum += widths[i];
      if (sumRowSectionMap.has(sum)) {
        sumRowSectionMap.set(sum, sumRowSectionMap.get(sum) + 1);
      } else {
        sumRowSectionMap.set(sum, 1);
      }
      commonSection = Math.max(sumRowSectionMap.get(sum), commonSection);
    }
  }
  return wall.length - commonSection;
}
