/** 
 * LeetCode 198. House Robber
 *
 * maxMoney用來記錄偷到每一家所偷到最高現金，
 * maxMoney[i]則是偷到第i家時所偷得最高現金。
 * 這一家偷不偷由nums[i]、maxMoney[i - 1]、maxMoney[i - 2]來決定。
 * 如果nums[i] + maxMoney[i - 2] > maxMoney[i - 1] 則偷，即maxMoney[i] = nums[i] + maxMoney[i - 2]；
 * 反之不偷，即maxMoney[i] = maxMoney[i - 1]。
 * maxMoney[i] = Math.max(maxMoney[i - 1], nums[i] + maxMoney[i - 2])
 * maxMoney[ i + 1 ] = Math.max(maxMoney[ i ], nums[ i ] + (maxMoney[ i - 1 ] ?? 0) )
 * 
 * @param {number[]} nums
 * @return {number} maxMoney[nums.length]
 *  */ 
 var rob = function(nums) {
  const maxMoney = [0]
  for (let i = 0; i < nums.length; i++){
    maxMoney[i + 1] =  maxMoney[i] > nums[i] + (maxMoney[i - 1] ?? 0) ? maxMoney[i] : nums[i] + (maxMoney[i - 1] ?? 0)
  }
  return maxMoney[nums.length]
 }

/**
var rob = function(nums) {
  const maxMoney = [0]
  for (let i = 0; i < nums.length; i++){
    maxMoney[i] =  (maxMoney[i - 1] ?? 0)  > nums[i] + (maxMoney[i - 2] ?? 0) ? (maxMoney[i - 1] ?? 0) : nums[i] + (maxMoney[i - 2] ?? 0)
  }
  return maxMoney[nums.length - 1]
};
*/