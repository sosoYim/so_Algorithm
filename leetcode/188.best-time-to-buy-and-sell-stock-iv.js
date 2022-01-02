/*
 * @lc app=leetcode id=188 lang=javascript
 *
 * [188] Best Time to Buy and Sell Stock IV
 *
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/description/
 *
 * algorithms
 * Hard (32.20%)
 * Likes:    3344
 * Dislikes: 149
 * Total Accepted:    218.1K
 * Total Submissions: 674K
 * Testcase Example:  '2\n[2,4,1]'
 *
 * You are given an integer array prices where prices[i] is the price of a
 * given stock on the i^th day, and an integer k.
 *
 * Find the maximum profit you can achieve. You may complete at most k
 * transactions.
 *
 * Note: You may not engage in multiple transactions simultaneously (i.e., you
 * must sell the stock before you buy again).
 *
 *
 * Example 1:
 *
 *
 * Input: k = 2, prices = [2,4,1]
 * Output: 2
 * Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit
 * = 4-2 = 2.
 *
 *
 * Example 2:
 *
 *
 * Input: k = 2, prices = [3,2,6,5,0,3]
 * Output: 7
 * Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit
 * = 6-2 = 4. Then buy on day 5 (price = 0) and sell on day 6 (price = 3),
 * profit = 3-0 = 3.
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= k <= 100
 * 0 <= prices.length <= 1000
 * 0 <= prices[i] <= 1000
 *
 *
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  const dy = Array.from({ length: k + 1 }, () => Array(prices.length).fill(0));
  for (let i = 1; i <= k; i++) {
    const invest = -Infinity; // 항상 최소값을 찾아넣기
    for (let j = 1; j < prices.length; j++) {
      // 0일 땐 어차피 마진 0
      invest = Math.max(invest, dy[i - 1][j - 1] - prices[j - 1]);
      // invest 값으로 사고, j 일에 판다고 생각
      // 기존 것이 더 좋은지, 새로 파는게 좋은지
      dy[i][j] = Math.max(dy[i][j - 1], invest + prices[j]);
    }
  }
  return dy[k][prices.length - 1];
};
// @lc code=end

console.log(maxProfit(2, [3, 2, 6, 5, 0, 3]));
