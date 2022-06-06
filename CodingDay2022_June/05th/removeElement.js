/**  LeetCode 27. Remove Element
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let len = nums.length;
  while (len--) {
    if (nums[len] !== val) {
      continue;
    }
    nums.splice(len, 1);
  }
  return nums.length;
};
