/*
 * 그리디 정렬은 뒷자리 기준!!!
 *
 * [646] Maximum Length of Pair Chain
 *
 * https://leetcode.com/problems/maximum-length-of-pair-chain/description/

 *
 * You are given an array of n pairs pairs where pairs[i] = [lefti, righti] and
 * lefti < righti.
 *
 * A pair p2 = [c, d] follows a pair p1 = [a, b] if b < c. A chain of pairs can
 * be formed in this fashion.
 *
 * Return the length longest chain which can be formed.
 *
 * You do not need to use up all the given intervals. You can select pairs in
 * any order.
 *
 *
 * Example 1:
 *
 *
 * Input: pairs = [[1,2],[2,3],[3,4]]
 * Output: 2
 * Explanation: The longest chain is [1,2] -> [3,4].
 *
 *
 * Example 2:
 *
 *
 * Input: pairs = [[1,2],[7,8],[4,5]]
 * Output: 3
 * Explanation: The longest chain is [1,2] -> [4,5] -> [7,8].
 *
 *
 *
 * Constraints:
 *
 *
 * n == pairs.length
 * 1 <= n <= 1000
 * -1000 <= lefti < righti <= 1000
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
  let answer = 1;
  pairs.sort((a, b) => a[1] - b[1]);
  console.log(pairs);
  let prev = pairs[0];

  for (let i = 1; i < pairs.length; i++) {
    if (prev[1] < pairs[i][0]) {
      answer += 1;
      prev = pairs[i];
    }
  }

  return answer;
};
// @lc code=end

console.log(
  findLongestChain([
    [-6, 9],
    [1, 6],
    [8, 10],
    [-1, 4],
    [-6, -2],
    [-9, 8],
    [-5, 3],
    [0, 3],
  ])
);
