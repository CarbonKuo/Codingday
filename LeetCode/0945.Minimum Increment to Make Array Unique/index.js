'use strict';

module.exports = { minIncrementForUnique };

/**
 * @param {number[]} nums
 * @return {number} totalMove
 */
function minIncrementForUnique(nums) {
  const sortNums = nums.sort((a, b) => a - b);
  let totalMove = 0;
  for (let i = 1; i < sortNums.length; i++) {
    if (sortNums[i] <= sortNums[i - 1]) {
      let preNum = sortNums[i];
      sortNums[i] = sortNums[i - 1] + 1;
      totalMove += sortNums[i] - preNum;
    }
  }
  return totalMove;
}
