/** LeetCode 56. Merge Intervals
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
  if(intervals.length == 1) return intervals;
  intervals.sort((a,b) => a[0] - b[0]);
  for(let i = 0; i < intervals.length - 1; i++){
    let nextStart = intervals[i+1][0];
    let prevEnd = intervals[i][1];
    let prevStart = intervals[i][0];
    let nextEnd = intervals[i+1][1];
    if(nextStart <= prevEnd){
      let newEnd = nextEnd < prevEnd ? prevEnd: nextEnd;
      intervals.splice(i, 2, [prevStart, newEnd]);
      i = i-1;
    }
  }
  return intervals;
};