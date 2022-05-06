/** bit operation
 * @param {string} S
 * @return {number} minAmplitude
 *  */ 
 function solution(S)
 {
   let size = s.split('');
   let bitshift = size.length - size.findIndex((n) => n === '1');
   let Onescount = size.filter((n) => n === '1').length - 1;
 
   return bitshift + Onescount;
 }    



// Driver Code
// let S =  '011100' return 7
// let S =  '111' return 5
// let S =  '1111010101111' return 22
// let S = '';
// for(let i = 0; i < 400000; i++){
//  S = S + '1';
// } return 799,999

/** 
• if S is odd, subtract 1 from it;
• if S is even, divide it by 2.

For example, if string S = "011100",
• S = 28, which is even: divide by 2 to obtain 14;
• S = 14, which is even: divide by 2 to obtain 7;
• S = 7, which is odd: subtract 1 to obtain 6;
• S = 6, which is even: divide by 2 to obtain 3;
• S = 3, which is odd: subtract 1 to obtain 2;
• S = 2, which is even: divide by 2 to obtain 1;
• S = 1, which is odd: subtract 1 to obtain 0;
Seven operations were required to reduce the value of V to 0.
*/
