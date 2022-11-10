/**
 * @param num
 * @return res
 */
public class Solution {
	public String intToRoman(int num) {
		int[] values = { 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 };
		String[] symbols = { "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I" };
		StringBuilder res = new StringBuilder();
		int n = values.length;
		for (int i = 0; i < n; i++) {
			int a = values[i];
			String b = symbols[i];
			while (num >= a) {
				num -= a;
				res.append(b);
			}
			if (num == 0) {
				break;
			}
		}
		return res.toString();
	}
}
