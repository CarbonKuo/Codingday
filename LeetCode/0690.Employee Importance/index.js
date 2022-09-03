'use strict';

module.exports = { GetImportance };

/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *   this.id = id
 *   this.importance = importance
 *   this.subordinates = subordinates
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number} totalImportance
 */
function GetImportance(employees, id) {
  let searchId = 0;
  let totalImportance = 0;
  let collection = [];
  for (let i = 0; i < employees.length; i++) {
    searchId = employees[i].id;
    if (searchId === id) {
      totalImportance += employees[i].importance;
      if (employees[i].subordinates.length >= 1) {
        collection = collection.concat(employees[i].subordinates);
      }
      i = -1;
      id = collection.shift();
    }
  }
  return totalImportance;
}
