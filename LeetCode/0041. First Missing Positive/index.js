'use strict';

module.exports = { firstMissingPositive };

/**
 * @param {number[]} nums
 * @return {number}
 */
function firstMissingPositive2(nums) {
  nums = Array.from(new Set(nums.sort((a, b) => a - b).filter((n) => n > 0)));

  if (!nums.length || nums[0] >= 2) return 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + 1 !== nums[i + 1]) {
      return nums[i] + 1;
    }
  }
}

function firstMissingPositive(nums) {
  let collectionMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    collectionMap.set(nums[i], 1);
  }
  for (let i = 1; i <= nums.length; i++) {
    if (!collectionMap.has(i)) return i;
  }
  return nums.length + 1;
}
