class Solution {
	public boolean canJump(int[] nums) {
		int goal = nums.length - 1;
        int maxStep = 0;
        for (int i = 0; i <= maxStep; i++) {
			maxStep = Math.max(maxStep, nums[i] + i);
            if (maxStep >= goal) {
                return true;
            }
        }
        return false;
	}
}
