/** LeetCode 1091. Shortest Path in Binary Matrix
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode} cloned
 */

var getTargetCopy = function(original, cloned, target) {
  if(!original || !cloned) return null;
  if(original === target) return cloned;
  return getTargetCopy(original.left, cloned.left, target) || getTargetCopy(original.right, cloned.right, target);
};

// var getTargetCopy = function(original, cloned, target) {
//   let stack = [];
//   while(stack.length || original){
//     while(original){
//       if(original === target) return cloned;
//       stack.push([original, cloned]);
//       original = original.left;
//       cloned = cloned.left;
//     }
//     [original, cloned] = stack.pop();
//     original = original.right;
//     cloned = cloned.right;
//   }
// };