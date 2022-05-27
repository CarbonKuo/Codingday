/** LeetCode 133. Clone Graph
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node} If it is an empty graph, return the node; If not, return the clone node.
 */
var cloneGraph = function (node) {
  if (!node) return node; // handle case of empty graph
  let visited = new Map();
  return dfs(node, visited);
};

/**
 * @param {Node} node
 * @param {Map} visited
 * @return {number|Node} If visited exists, return the visited map node value; if not, return the clone.
 */
function dfs(node, visited) {
  if (visited.has(node.val)) return visited.get(node.val); // If visited exists, return the value that exists.
  let clone = new Node(node.val); // If visited doesn't exist, create a Node clone neighbor.
  visited.set(clone.val, clone);
  clone.neighbors = node.neighbors.map((neighbor) => dfs(neighbor, visited));
  // for(let i = 0; i < node.neighbors.length; i++) {
  //   clone.neighbors.push(dfs(node.neighbors[i], visited));
  // }
  return clone;
}
