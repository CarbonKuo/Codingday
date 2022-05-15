/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/** LeetCode 1302. Deepest Leaves Sum
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
  let curDepth = 0;
  let sum = 0;
  let dfs = function(node, deep){
    if(node === null) return;
    if(deep === curDepth) sum += node.val;
    if(deep > curDepth){
      curDepth = deep;
      sum = node.val;
    }
    dfs(node.left, deep + 1);
    dfs(node.right, deep + 1);
  };
  
  dfs(root, 0);
  return sum;
};