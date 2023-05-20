package leetcode

/*
 * @lc app=leetcode id=1497 lang=golang
 *
 * [1497] Check If Array Pairs Are Divisible by k
 */

// @lc code=start
func canArrange(arr []int, k int) bool {
	freq := make([]int, k)

	for _, i := range arr {
		rmd := i % k
		// convert negative remainders to positive
		if rmd < 0 {
			rmd += k
		}
		freq[rmd]++

	}
	for j := 1; j < k; j++ {
		if freq[j] != freq[k-j] {
			return false
		}
	}
	return freq[0]%2 == 0
}

// @lc code=end
