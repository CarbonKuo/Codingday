/** LeetCode 442. Find All Duplicates in an Array
 * @param {number[]} nums
 * @return {number[]} res
 */
 var findDuplicates = function(nums) {
  let res = [];
  let counts = [];
  for(let num of nums){
    if(counts[num]){
      counts[num]++;
    }else{
      counts[num] = 1;
    }
  }
  for(let i = 0; i <= counts.length; i++){
    if(counts[i] === 2){
      res.push(i);
    }
  }
  return res;
};

// var findDuplicates = function(nums) {
//   let res = [];
//   for (let i = 0; i < nums.length; i++){
//     let target = Math.abs(nums[i]);
//     if(nums[target - 1] > 0){
//       nums[target - 1] = -nums[target - 1]; 
//     }else{
//       res.push(target);
//     }
//   }
//   return res;
// };