/**  LeetCode 1. Two Sum
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]} res
 *  */ 
var twoSum = function(nums, target) {
  let start = 0;
  let end = 1;
  while(start < end){
      if(nums[start] + nums[end] === target){
          return [start, end];
      }else{
          if(end < nums.length - 1){
              end++;
          }else{
              start++;
              end = start + 1;
          }
      }
  }
};

// var twoSum = function(nums, target) {
//   let res = [];
//   for(let i = 0; i < nums.length; i++){
//     for(let j = i + 1; j < nums.length; j++){
//       if(nums[i] + nums[j] === target){
//         res.push(i, j);
//       }
//     }
//   }
//   return res;
// };