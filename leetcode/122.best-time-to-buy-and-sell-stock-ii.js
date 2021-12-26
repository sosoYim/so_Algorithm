/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let lt = 0;
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i - 1] >= prices[i]) {
      profit += prices[i - 1] - prices[lt];
      lt = i;
    }
  }
  profit += prices[prices.length - 1] - prices[lt];
  return profit;
};
// @lc code=end
