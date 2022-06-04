/** LeetCode 70. Climbing Stairs
 * @param {number} n
 * @return {number} res
 */
 var climbStairs = function(n) {
  if(n <= 2) return n;
  let twoStepNext = 0, oneStepNext = 1, res = 2;
  for(let i = 3; i <= n; i++){
    twoStepNext = oneStepNext;
    oneStepNext = res;
    res = oneStepNext + twoStepNext;
  }
  return res;
};