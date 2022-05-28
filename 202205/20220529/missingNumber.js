/** LeetCode 268. Missing Number
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
  if(!nums) return nums;
  nums.sort((a,b) => a - b);
  let len = nums.length;
  for(let i = 0; i < len; i++){
    if(nums[i] !== i) return i;
  }
  return len;
};