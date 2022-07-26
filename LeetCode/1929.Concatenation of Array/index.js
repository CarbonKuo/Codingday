'use strict';

module.exports = { getConcatenation };

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function getConcatenation(nums) {
  let res = [];
  return res.concat(nums).concat(nums);
}
