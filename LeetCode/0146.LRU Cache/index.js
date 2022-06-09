'use strict';

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.max = capacity;
  this.map = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    const node = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, node);
    return node;
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    this.map.delete(key);
  }
  this.map.set(key, value);
  if (this.map.size > this.max) {
    this.map.delete(this.map.keys().next().value);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// /**
//  * @param {number} capacity
//  */
// var LRUCache = function (capacity) {
//   this.Map = new Map();
//   this.capacity = capacity;

//   // Create dummy head and tail nodes
//   this.head = new Node();
//   this.tail = new Node();

//   // Connect the dummy head and tail nodes together
//   this.head.next = this.tail;
//   this.tail.prev = this.head;
// };

// /**
//  * @param {number} key
//  * @return {number}
//  */
// LRUCache.prototype.get = function (key) {
//   // Check whether this key exists in our cache ...
//   if (!this.Map.has(key)) {
//     return -1;
//   }

//   // The key exists in our cache, look up the cache entry using our hash map
//   const node = this.Map.get(key);

//   // Move the cache entry to front of the linked list (i.e. mark it as most recently used)
//   this.remove_node(node);
//   this.add_node(node);

//   // Return the cache entry's value
//   return node.val;
// };

// /**
//  * @param {number} key
//  * @param {number} value
//  * @return {void}
//  */
// LRUCache.prototype.put = function (key, value) {
//   if (this.Map.has(key)) {
//     // This key is already in our cache ...

//     // Look up the cache entry using our hash map and update its value
//     const node = this.Map.get(key);
//     node.val = value;

//     // Move the cache entry to the front of the linked list (i.e. mark it as most recently used)
//     this.remove_node(node);
//     this.add_node(node);
//   } else {
//     // This key is not in our cache ...

//     // If our cache is at capacity ...
//     if (this.Map.size === this.capacity) {
//       // Delete the cache entry at the end of the linked list (i.e. its least recently used)
//       this.Map.delete(this.tail.prev.key);
//       this.remove_node(this.tail.prev);
//     }

//     // Create a new cache entry
//     const node = new Node(key, value);

//     // Add the cach entry to our hash map for O(1) lookup
//     this.Map.set(key, node);

//     // Add the cache entry to the front of the linked list (i.e. mark it as most recently used)
//     this.add_node(node);
//   }
// };

// // Removes a node from the linked list
// LRUCache.prototype.remove_node = function (node) {
//   const next_node = node.next;
//   const prev_node = node.prev;

//   prev_node.next = next_node;
//   next_node.prev = prev_node;
// };

// // Adds a node to the front of the linked list
// LRUCache.prototype.add_node = function (node) {
//   const temp = this.head.next;
//   this.head.next = node;
//   node.prev = this.head;
//   node.next = temp;
//   temp.prev = node;
// };

// var Node = function (key, val, next, prev) {
//   this.key = key === undefined ? null : key;
//   this.val = val === undefined ? null : val;
//   this.next = next === undefined ? null : next;
//   this.prev = prev === undefined ? null : prev;
// };

// /**
//  * Your LRUCache object will be instantiated and called as such:
//  * var obj = new LRUCache(capacity)
//  * var param_1 = obj.get(key)
//  * obj.put(key,value)
//  */
module.exports = { LRUCache };
