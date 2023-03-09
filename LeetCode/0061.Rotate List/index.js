'use strict';

module.exports = { rotateRight };

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode} newHead
 */
function rotateRight(head, k) {
  if (!head) {
    return head;
  }
  let tail = head;
  let length = 1;
  while (tail.next) {
    tail = tail.next;
    length += 1;
  }
  tail.next = head;
  const step = length - (k % length);
  for (let i = 0; i < step; i += 1) {
    tail = tail.next;
  }
  const newHead = tail.next;
  tail.next = null;
  return newHead;
}
