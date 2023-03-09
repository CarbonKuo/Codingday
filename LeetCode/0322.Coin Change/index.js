'use strict';

module.exports = { coinChange };

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChange(coins, amount) {
  if (!amount) return 0;
  let countCoinChange = new Array(amount + 1).fill(Infinity);
  countCoinChange[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) countCoinChange[i] = Math.min(countCoinChange[i], countCoinChange[i - coin] + 1);
    }
  }
  return countCoinChange[amount] === Infinity ? -1 : countCoinChange[amount];
}
