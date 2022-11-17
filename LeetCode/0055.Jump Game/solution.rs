pub struct Solution;

impl Solution {
	pub fn can_jump(nums: Vec<i32>) -> bool {
    	let goal = nums.len();
        let mut maxstep = 0;
        for i in 0..goal {
            if i <= maxstep {
                maxstep = maxstep.max(i + nums[i] as usize);
                if maxstep >= goal - 1 {
                    return true;
                }
            }
        }
        false
   }
}

#[test]
fn test1() {
    assert_eq!(Solution::can_jump(vec![2, 3, 1, 1, 4]), true);
}

#[test]
fn test2() {
  assert_eq!(Solution::can_jump(vec![3, 2, 1, 0, 4]), false);
}

#[test]
fn test3() {
  assert_eq!(Solution::can_jump(vec![1, 1, 1, 0]), true);
}
