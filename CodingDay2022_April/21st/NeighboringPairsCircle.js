/** Neighboring Pairs Circle
 * @param {number} circleElements
 * @return {number} pairs
 *  */
function getNeighboringPairsCircle(circleElements) {
  let rear = circleElements.length - 1;
  let front = 0;
  let pairs = 0;
  if (circleElements.length < 2) return pairs;

  for (let i = front; i <= rear; i++) {
    if ((circleElements[i] + circleElements[i + 1]) % 2 === 0) {
      i++;
      pairs++;
    }
  }
  if (
    (circleElements[front] + circleElements[rear]) % 2 === 0 &&
    (circleElements[rear - 1] + circleElements[rear]) % 2 !== 0 &&
    (circleElements[front] + circleElements[front + 1]) % 2 !== 0
  ) {
    pairs++;
  }
  return pairs;
}

// let A = [4, 2, 5, 8, 7, 3, 7] // 2
// let A = [14, 21, 16, 35, 22] // 1
// let A = [5, 5, 5, 5, 5, 5] // 3
// let A = [2, 1, 1, 1, 2] //2
// let A = [2] // 0
// let A = [1, 2, 5, 8, 7, 3, 2, 2, 3] // 3
// let A = [1, 2, 5, 8, 7, 3, 2, 2, 4]; // 2
// document.write(getNeighboringPairsCircle(A))
