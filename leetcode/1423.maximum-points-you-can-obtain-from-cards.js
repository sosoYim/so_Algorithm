/*
 * @lc app=leetcode id=1423 lang=javascript
 *
 * [1423] Maximum Points You Can Obtain from Cards
 */

// @lc code=start
/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  const sum = cardPoints.reduce((acc, val) => acc + val, 0);
  let tempSum = 0;
  for (let i = 0; i < cardPoints.length - k; i++) {
    tempSum += cardPoints[i];
  }
  let lt = 0;
  let min = tempSum;
  for (let rt = cardPoints.length - k; rt < cardPoints.length; rt++) {
    tempSum -= cardPoints[lt++];
    tempSum += cardPoints[rt];
    // console.log({ tempSum, rt });
    min = Math.min(tempSum, min);
  }
  return sum - min;
};

// console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3));
// @lc code=end
