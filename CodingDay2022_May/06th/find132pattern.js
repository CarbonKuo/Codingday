/**  LeetCode 456. 132 Pattern
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  const elements = nums.length;
  if (elements < 3) return false;
  let stack = [];
  let med = -Infinity;

  for (let i = elements - 1; i >= 0; --i) {
    if (nums[i] < med) return true;
    while (stack.length > 0 && nums[i] > stack[stack.length - 1]) {
      med = stack.pop();
    }
    stack.push(nums[i]);
  }
  return false;
};

// Runtime Error
/**
  var find132pattern = function(nums) {
    let hasPattern = [];
      for(let i = 0; i < nums.length; i++){
        let min = nums[i];
        for(let j = i + 1; j < nums.length; j++){
          for( let k = j + 1; k < nums.length; k++){
            if(nums[j] > nums[k] && nums[k] > min){
              hasPattern.push([min, nums[j], nums[k]]);
            }
          }
        }
      }
    return hasPattern.length === 0 ? false : true;
  };
 */
