/** LeetCode 70. Climbing Stairs
 * @param {number} n
 * @return {number} res
 */
 var climbStairs = function(n) {
  if(n <= 2) return n;
  let twoStepNext = 1, oneStepNext = 0, res = 2;
  for(let i = 3; i <= n; i++){
    oneStepNext = twoStepNext;
    twoStepNext = res;
    res = oneStepNext + twoStepNext;
  }
  return res;
};