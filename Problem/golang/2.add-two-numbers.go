package leetcode

/*
 * @lc app=leetcode id=2 lang=golang
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {

	var result *ListNode
	var current *ListNode
	var carry int

	for l1 != nil || l2 != nil || carry != 0 {
		var sum int

		if l1 != nil {
			sum += l1.Val
			l1 = l1.Next
		}

		if l2 != nil {
			sum += l2.Val
			l2 = l2.Next
		}

		sum += carry

		carry = sum / 10
		sum = sum % 10

		node := &ListNode{Val: sum}

		if result == nil {
			result = node
			current = node
		} else {
			current.Next = node
			current = node
		}
	}

	return result
}

// @lc code=end
