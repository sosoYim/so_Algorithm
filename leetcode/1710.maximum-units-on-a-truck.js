/*
 * @lc app=leetcode id=1710 lang=javascript
 *
 * [1710] Maximum Units on a Truck
 *
 * https://leetcode.com/problems/maximum-units-on-a-truck/description/
 *
 * algorithms
 * Easy (72.11%)
 * Likes:    1219
 * Dislikes: 89
 * Total Accepted:    109.1K
 * Total Submissions: 151.3K
 * Testcase Example:  '[[1,3],[2,2],[3,1]]\n4'

// @lc code=start
/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  const total = boxTypes.reduce((acc, [_, w]) => acc + w, 0);
  // console.log(total);
  boxTypes.sort((a, b) => a[0] - b[0]);
  // const inTruck = [];
  let answer = 0;

  function DFS(L, s, w, wRest) {
    if (wRest <= answer || w > truckSize) return;
    if (L === boxTypes.length) answer = Math.max(answer, w);
    else {
      for (let i = s; i < boxTypes.length; i++) {
        DFS(L + 1, i, w + boxTypes[i], wRest - boxTypes[i]);
        DFS(L + 1, i, w, wRest);
      }
    }
  }
  DFS(0, 0, 0, total);
  return answer;
};
// @lc code=end

console.log(
  maximumUnits(
    [
      [1, 3],
      [2, 2],
      [3, 1],
    ],
    4
  )
);
