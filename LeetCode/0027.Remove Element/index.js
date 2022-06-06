'use strict';

module.exports = { removeElement };

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
  let len = nums.length;
  while (len--) {
    if (nums[len] !== val) {
      continue;
    }
    nums.splice(len, 1);
  }
  return nums.length;
}
