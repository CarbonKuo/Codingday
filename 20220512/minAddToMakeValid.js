/** LeetCode 921. Minimum Add to Make Parentheses Valid
 * @param {string} Parentheses
 * @return {number} needOpeningParenthesis + needClosingParenthesis
 */
 var minAddToMakeValid = function(Parentheses) {
  let needOpeningParenthesis = 0;
  let needClosingParenthesis = 0;

  for (let Parenthesis of Parentheses) {
    if (Parenthesis === '(') {
      needClosingParenthesis++;
    }
    if (Parenthesis === ')') {
      needClosingParenthesis--;
      if (needClosingParenthesis == -1) {
        needClosingParenthesis = 0;
        needOpeningParenthesis++;
      }
    }
  }
  return needOpeningParenthesis + needClosingParenthesis;
};