'use strict';

module.exports = { exclusiveTime };

/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]} excTime
 */
function exclusiveTime(n, logs) {
  const excTime = new Array(n).fill(0);
  const stack = [];
  const THREAD = {
    START: 'start',
    FINISH: 'end',
  };
  for (let log of logs) {
    const [idStr, status, timeStr] = log.split(':');
    const [id, time] = [Number.parseInt(idStr), Number.parseInt(timeStr)];
    switch (status) {
      case THREAD.START: {
        if (stack.length) excTime[stack[stack.length - 1][0]] += time - stack[stack.length - 1][1];
        stack.push([id, time]);
        break;
      }
      case THREAD.FINISH: {
        let [pid, ptime] = stack.pop();
        excTime[pid] += time - ptime + 1;
        if (stack.length) stack[stack.length - 1][1] = time + 1;
        break;
      }
      default: {
        break;
      }
    }
  }
  return excTime;
}
