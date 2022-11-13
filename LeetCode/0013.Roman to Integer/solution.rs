pub struct Solution;

impl Solution {
  pub fn roman_to_int(s: String) -> i32 {
    let mut res = 0;
    let mut last = 0;
    for b in s.bytes().rev() {
        let n = match b {
            b'I' => 1, b'V' => 5, b'X' => 10, b'L' => 50,
            b'C' => 100, b'D' => 500, b'M' => 1000, _ => panic!(),
        };
        res += if n < last { -n } else { n };
        last = n;
    }
    res
   }
}

#[test]
fn test1() {
    assert_eq!(Solution::roman_to_int("DCCCXCIX".to_owned()), 899);
}

