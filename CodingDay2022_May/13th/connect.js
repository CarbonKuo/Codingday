/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/** LeetCode 117. Populating Next Right Pointers in Each Node II
 * @param {Node} root
 * @return {Node} root
 */
var connect = function(root) {
  if(root === null){
    return null;
  }
  let queue = [root];
  while(queue.length){
    let levelSize = queue.length;
    let last = null;
    for(let i = 1; i <= levelSize; i++){
      let f = queue.shift();
      if(f.left !== null){
        queue.push(f.left);
      }
      if(f.right !== null){
        queue.push(f.right);
      }
      if(i !== 1){
        last.next = f;
      }
      last = f;
    }
  }
  return root;
};
