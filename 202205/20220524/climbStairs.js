/** LeetCode 70. Climbing Stairs
 * @param {number} n
 * @return {number} res
 */
 var climbStairs = function(n) {
  let p = 0, q = 0, res =1;
  for(let i = 1; i <= n; i++){
    p = q;
    q = r;
    res = p + q;
  }
  return res;
};