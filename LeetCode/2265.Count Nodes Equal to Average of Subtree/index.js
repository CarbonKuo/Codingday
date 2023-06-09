'use strict';

module.exports = { averageOfSubtree };

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number} res
 */
function averageOfSubtree(root) {
  let res = 0;
  function dfs(node) {
    if (node === null) return [0, 0];
    let [leftSum, leftCount] = dfs(node.left);
    let [rightSum, rightCount] = dfs(node.right);
    let avg = Math.floor((leftSum + rightSum + node.val) / (leftCount + rightCount + 1));
    if (avg === node.val) res += 1;
    return [leftSum + rightSum + node.val, leftCount + rightCount + 1];
  }
  dfs(root);
  return res;
}
