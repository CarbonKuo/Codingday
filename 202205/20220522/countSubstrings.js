/** LeetCode 647. Palindromic Substrings
 * @param {string} s
 * @return {number} res
 */
var countSubstrings = function(s) {
  let n = s.length;
  let res = 0;
  for (let i = 0; i < 2 * n - 1; i++){
    let left = i / 2;
    let right = i / 2 + i % 2;
    while ( left >= 0 && right < n && s.charAt(left) === s.charAt(right)){
      left--;
      right++;
      res++;
    }
  }
  return res;
};