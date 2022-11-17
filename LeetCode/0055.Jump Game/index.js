'use strict';

module.exports = { canJump };

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) {
  let goal = nums.length - 1;
  let maxStep = 0;
  for (let i = 0; i <= maxStep; i++) {
    maxStep = Math.max(maxStep, nums[i] + i);
    if (maxStep >= goal) return true;
  }
  return false;
}
