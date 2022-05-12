/** LeetCode 921. Minimum Add to Make Parentheses Valid
 * @param {string} String
 * @return {number} needOpeningParenthesis + needClosingParenthesis
 */
 var minAddToMakeValid = function(String) {
  let needOpeningParenthesis = 0;
  let needClosingParenthesis = 0;

  for (curString of String) {
    if (curString === '(') {
      needClosingParenthesis++;
    }
    if (curString === ')') {
      needClosingParenthesis--;
      if (needClosingParenthesis == -1) {
        needClosingParenthesis = 0;
        needOpeningParenthesis++;
      }
    }
  }
  return needOpeningParenthesis + needClosingParenthesis;
};