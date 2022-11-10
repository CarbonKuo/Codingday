pub struct Solution;

impl Solution {
    pub fn int_to_roman(num: i32) -> String {
        let values = vec![1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        let symbols = vec!["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
        let mut ans = Vec::new();
        let mut i = 0;
        let mut n = num;

        while i < values.len() && n >= 0 {
            while values[i] <= n {
                n -= values[i];
                ans.push(symbols[i]);
            }
            i += 1;
        }

        ans.into_iter().collect::<String>()
    }
}

#[test]
fn test1() {
    assert_eq!(Solution::int_to_roman(3), String::from("III"));
}

#[test]
fn test2() {
    assert_eq!(Solution::int_to_roman(899), String::from("DCCCXCIX"));
}

// rustc solution.rs
