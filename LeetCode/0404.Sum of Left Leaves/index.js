'use strict';

module.exports = { sumOfLeftLeaves };

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.left = (left===undefined ? null : left)
 *   this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function sumOfLeftLeaves(root) {
  const helper = (node) => {
    if (!node) return 0;

    let leftVal = helper(node.left);
    let rightVal = helper(node.right);
    let midVal = 0;
    if (node.left && !node.left.left && !node.left.right) midVal = node.left.val;
    return leftVal + rightVal + midVal;
  };

  return helper(root);
}
