/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */

var shipWithinDays = function (weights, days) {
  let lt = Math.max(...weights);
  let rt = weights.reduce((acc, v) => acc + v, 0);
  let answer = rt;

  function possibleDays(limit) {
    let cnt = 1;
    let sum = 0;

    for (let i = 0; i < weights.length; i++) {
      // if (weights[i] > limit) return false;
      if (sum + weights[i] > limit) {
        cnt += 1;
        sum = weights[i];
      } else {
        sum += weights[i];
      }
    }
    return cnt;
  }
  // possibleDays(9);
  while (lt <= rt) {
    const mid = parseInt((lt + rt) / 2);
    // console.log(mid, possibleDays(mid));
    if (possibleDays(mid) <= days) {
      answer = Math.min(answer, mid);
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  return answer;
};

// console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
// console.log(shipWithinDays([3, 3, 3, 3, 3, 3], 2)); // 2
console.log(shipWithinDays([1, 2, 3, 1, 1], 4)); // 3
