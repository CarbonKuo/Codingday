/** LeetCode 396. Rotate Function
 * @param {number[]} nums
 * @return {number} findListMaximum
 */
var maxRotateFunction = function(nums) {
  let len = nums.length;
  let funcResultList = [0];
  let sum = 0;
  for(let i = 0; i < len; i++){
    sum += nums[i];
    funcResultList[0] += (i * nums[i]);
  }
  let findListMaximum = funcResultList[0];
  for(let i = 1; i < len; i++){
    funcResultList[i] = funcResultList[i-1] - sum + len * nums[i-1];
    findListMaximum = Math.max(funcResultList[i], findListMaximum);
  }
  return findListMaximum;
};
