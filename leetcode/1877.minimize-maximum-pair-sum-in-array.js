/*
 * @lc app=leetcode id=1877 lang=javascript
 *
 * [1877] Minimize Maximum Pair Sum in Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  const pairsSum = [];
  for (let i = 0; i < nums.length / 2; i++) {
    pairsSum.push(nums[i] + nums[nums.length - 1 - i]);
  }
  return Math.max(...pairsSum);
};

// @lc code=end
