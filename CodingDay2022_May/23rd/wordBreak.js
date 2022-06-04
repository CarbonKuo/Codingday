/** LeetCode 139. Word Break
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {
  let wordSet = new Set(wordDict);
  let len = s.length;
  let dp = new Array(len).fill(false);
  dp[0] = true;
  for(let i = 0; i <= len; i++){
    for(let j = i; j >= 0; j--){
      if(dp[i] === true) break;
      if(dp[j] === false) continue;
      let suffix = s.slice(j, i);
      if (wordSet.has(suffix) && dp[j] ){
        dp[i] = true;
        break;
      }
    }
  }
  return dp[len] ? true : false;
};