/**
 * LeetCode 198. House Robber
 *
 * maxMoney is used to record the highest cash stolen from each house,
 * maxMoney[i] is the highest amount of cash stolen from the i-th house.
 * Whether this house steals is determined by nums[i], maxMoney[i - 1], and maxMoney[i - 2].
 * Steal if nums[i] + maxMoney[i - 2] > maxMoney[i - 1], i.e. maxMoney[i] = nums[i] + maxMoney[i - 2];
 * Otherwise do not steal, i.e. maxMoney[i] = maxMoney[i - 1].
 * maxMoney[i] = Math.max(maxMoney[i - 1], nums[i] + maxMoney[i - 2])
 * maxMoney[ i + 1 ] = Math.max(maxMoney[ i ], nums[ i ] + (maxMoney[ i - 1 ] ?? 0) )
 *
 * @param {number[]} nums
 * @return {number} maxMoney[nums.length]
 *  */
var rob = function (nums) {
  const maxMoney = [0];
  for (let i = 0; i < nums.length; i++) {
    maxMoney[i + 1] =
      maxMoney[i] > nums[i] + (maxMoney[i - 1] ?? 0)
        ? maxMoney[i]
        : nums[i] + (maxMoney[i - 1] ?? 0);
  }
  return maxMoney[nums.length];
};

/**
var rob = function(nums) {
  const maxMoney = [0]
  for (let i = 0; i < nums.length; i++){
    maxMoney[i] =  (maxMoney[i - 1] ?? 0)  > nums[i] + (maxMoney[i - 2] ?? 0) ? (maxMoney[i - 1] ?? 0) : nums[i] + (maxMoney[i - 2] ?? 0)
  }
  return maxMoney[nums.length - 1]
};
*/
