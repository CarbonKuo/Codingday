'use strict';

module.exports = { minimumTotal };

/**
 * @param {number[][]} triangle
 * @return {number}
 */
function minimumTotal(triangle) {
  const bottom = triangle[triangle.length - 1];
  const totalTier = bottom.length;
  const minPathTotal = bottom.map((item) => item);

  for (let tier = totalTier - 2; tier >= 0; tier--) {
    for (let path = 0; path < triangle[tier].length; path++) {
      minPathTotal[path] = Math.min(minPathTotal[path], minPathTotal[path + 1]) + triangle[tier][path];
    }
  }
  return minPathTotal[0];
}

// function minimumTotal(triangle) {
//   const h = triangle.length;
//   const dp = new Array(h);
//   for (let i = 0; i < h; i++) {
//       dp[i] = new Array(triangle[i].length);
//   }

//   for (let i = h - 1; i >= 0; i--) {
//       for (let j = 0; j < triangle[i].length; j++) {
//           if (i == h - 1) {
//               dp[i][j] = triangle[i][j];
//           } else {
//               dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
//           }
//       }
//   }
//   return dp[0][0];
// };
