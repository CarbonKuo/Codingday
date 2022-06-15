/** bit operation
 * @param {string} road
 * @param {number} budget
 * @return {number} fixTotalPotholes
 *  */
function fixPotholesSolution(road, budget) {
  // Init
  let fixTotalPotholes = 0;
  // Fixing a segment consisting of K consecutive potholes costs K + 1.
  if (budget < 2) return fixTotal;

  // Split road sections where potholes exist
  let potholes = road.split('.').filter(Boolean);
  // Prioritize fixing of the largest road sections with potholes
  potholes.sort().reverse();
  for (let i = 0; i < potholes.length; i++) {
    // If the budget can be paid to fix the segment consisting of consecutive potholes road
    if (budget >= potholes[i].length + 1) {
      budget -= potholes[i].length + 1;
      fixTotalPotholes += potholes[i].length;
      // If the budget can cover some of the potholes
    } else {
      fixTotalPotholes += budget - 1;
      budget = 0;
      break;
    }
  }
  return fixTotalPotholes;
}

// let S = '...xxx..x....xxx.'; // 5
// let B = 7;
// let S = '..xxxxx' // 3
// let B =  4
// let S = 'x.x.xxx...x' // 6
// let B =  14
// let S = '..' // 0
// let B = 5
// let S ='...xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx..........xxxx.x..x.x.x.x.xxxxxxxxxxxxxx.xx.x.x.x.x.x.xx.x..x.x.x.x.x.x.x.x..x.x.xx..x....xxx.' //48
// let B = 50
// document.write(solution(S, B));
