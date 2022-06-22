'use strict';

module.exports = { singleNumber };

/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  let res = 0;
  for (let num of nums) {
    res ^= num;
  }
  return res;
}
