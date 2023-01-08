'use strict';

module.exports = { uniquePaths };

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function uniquePaths2(m, n) {
  const dp = Array(n).fill(1);
  while (--m > 0) {
    for (let i = 1; i < n; i++) {
      dp[i] += dp[i - 1];
    }
  }
  return dp[n - 1];
}

function uniquePaths(m, n) {
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
}
