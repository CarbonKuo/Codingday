/** LeetCode 57. Insert Interval
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
 var insert = function(intervals, newInterval) {
  let start = intervals.findIndex(item => item[1] >= newInterval[0]);
  let end = -1;
  for(let i = intervals.length - 1; i >= 0; i--){
    if(intervals[i][0] <= newInterval[1]){
      end = i;
      break;
    }
  }
  if(start !== -1 && end !== -1){
    let tar = [Math.min(intervals[start][0], newInterval[0]), Math.max(intervals[end][1], newInterval[1])];
    if (start <= end) {
      intervals.splice(start, end - start + 1, tar);
    } else {
      intervals.splice(start, 0, tar);
    }
  } else if (start === -1) {
    intervals.push(newInterval);
  } else if (end === -1) {
    intervals.unshift(newInterval);
  } else {
    intervals.push(newInterval);
  }
  return intervals;
};