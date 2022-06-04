/** LeetCode 1461. Check If a String Contains All Binary Codes of Size K
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
  if(s.length < (1 << k) + k - 1) return false;
  let set = new Set();
  let max = 1 << k;
  for(let i = 0; i <= s.length - k; i++){
    let code = s.substring(i, i + k);
    if(!set.has(code)){
      set.add(code);
    }
  }
  return set.size === max;
};