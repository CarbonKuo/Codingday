'use strict';

module.exports = { totalHammingDistance };

/**
 * @param {number[]} nums
 * @return {number} res
 */
function totalHammingDistance(nums) {
  let res = 0;
  let n = nums.length;
  for (let i = 0; i < 30; ++i) {
    let sumbit = 0;
    for (let num of nums) {
      sumbit += (num >> i) & 1;
    }
    res += sumbit * (n - sumbit);
  }
  return res;
}
