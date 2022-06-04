/** LeetCode 191. Number of 1 Bits
 * @param {number} n - a positive integer
 * @return {number} Weight
 */
 var hammingWeight = function(n) {
  let Weight = 0;
  while(n > 0){
    if(n % 2 === 1){
      Weight++;
    }
    n = Math.floor(n / 2);
  }
  return Weight;
};

/** LeetCode 191. Number of 1 Bits
 * @param {number} n - a positive integer
 * @return {number} Weight
 */
//  var hammingWeight = function(n) {
//   let bit = n.toString(2);
//   let Weight = 0;
//   for (let i = 0; i < bit.length; i++){
//     if(bit[i] === '1') Weight += 1;
//   }
//   return Weight;
// };