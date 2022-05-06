/** 
 * LeetCode 743. Network Delay Time
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number} ans
 */
var networkDelayTime = function(times, n, k) {
  // Create an adjacency matrix table to represent the direction and distance between two points, initially infinity
  const graph = new Array(n).fill(0).map(item => new Array(n).fill(Infinity));
  
  // mapping data into tables
  for(let item of times) {
      let [x, y, time] = item;
      // Because the node is from 1-n, 1 is first subtracted here to become the matrix index 0~n-1
      graph[x-1][y-1] = time;
  }
  
  // Create an array of distances
  const dist = new Array(n).fill(Infinity);
  // k is the starting point, its distance to itself is 0
  dist[k-1] = 0;
  
  // Create a marker array to record whether the current node is marked
  const marked = new Array(n).fill(false);

  for (let i = 0; i < n; i++) {
      let x = -1;
      // Find unmarked closest point
      for(let y = 0; y < n; y++) {
          if(!marked[y] && (x === -1 || dist[y] < dist[x])) {
              x = y;
          }
      }

      // update distance
      marked[x] = true;
      for(let y = 0; y < n; y++) {
          dist[y] = Math.min(dist[y], dist[x] + graph[x][y]);
      }
  }

  let ans = Math.max(...dist);
  return ans === Infinity ? -1 : ans;
};