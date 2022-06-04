/** LeetCode 9. Palindrome Number
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var isPalindrome = function(x) {
  if(x < 0) return false;
  let res = 0;
  let tmp = x;
  while(tmp > 0){
    res = res * 10 + tmp % 10;
    tmp = Math.floor(tmp / 10);
  }
  return res === x;
};
