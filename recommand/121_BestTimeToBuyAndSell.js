/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let answer = 0;
  let min = prices[0];
  let maxMargin = 0;
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    maxMargin = Math.max(maxMargin, prices[i] - min);
  }
  // const dy = Array(prices.length).fill(0);
  // for (let i = 0; i < prices.length - 1; i++) {
  //   let max = Math.max(...prices.slice(i + 1));
  //   dy[i] = max - prices[i];
  // }
  // return Math.max(...dy);
  return maxMargin;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
