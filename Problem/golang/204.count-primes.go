package leetcode

/*
 * @lc app=leetcode id=204 lang=golang
 *
 * [204] Count Primes
 */

// @lc code=start
func countPrimes(n int) int {
	if n <= 2 {
		return 0
	}

	primes := make([]bool, n)
	for i := 2; i < n; i++ {
		primes[i] = true
	}

	for i := 2; i*i < n; i++ {
		if !primes[i] {
			continue
		}
		for j := i * i; j < n; j += i {
			primes[j] = false
		}
	}

	count := 0
	for i := 2; i < n; i++ {
		if primes[i] {
			count++
		}
	}
	return count
}

// @lc code=end
