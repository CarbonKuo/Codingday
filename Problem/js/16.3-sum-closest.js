/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let closest = Infinity;
  let diff = Infinity;
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (Math.abs(sum - target) < diff) {
        diff = Math.abs(sum - target);
        closest = sum;
      }

      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return closest;
};
// @lc code=end
