'use strict';

module.exports = { majorityElement };

/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
  let count = 0;
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      result = nums[i];
    }
    nums[i] === result ? count++ : count--;
  }
  return result;
}
