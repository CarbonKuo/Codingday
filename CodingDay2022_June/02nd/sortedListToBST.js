/** LeetCode 109. Convert Sorted List to Binary Search Tree
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  const buildBST = (start, end) => {
    if (start > end) return null;
    let mid = (start + end) >>> 1;
    let root = new TreeNode(arr[mid]);
    root.left = buildBST(start, mid - 1);
    root.right = buildBST(mid + 1, end);
    return root;
  };

  return buildBST(0, arr.length - 1);
};

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
