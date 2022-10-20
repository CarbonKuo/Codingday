'use strict';

module.exports = { subsets };

/**
 * @param {number[]} nums
 * @return {number[][]} result
 */

function subsets(nums) {
  const result = [];
  dfs(0, []);
  return result;

  function dfs(index, cur) {
    result.push(cur);
    for (let i = index; i < nums.length; i++) {
      dfs(i + 1, [...cur, nums[i]]);
    }
  }
}
