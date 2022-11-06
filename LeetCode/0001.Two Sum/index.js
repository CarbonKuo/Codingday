'use strict';

module.exports = { twoSum };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const hash = new Map();
  for (const [i, n] of nums.entries()) {
    const diff = target - n;
    if (hash.has(diff)) {
      return [hash.get(diff), i];
    }
    hash.set(n, i);
  }
}
