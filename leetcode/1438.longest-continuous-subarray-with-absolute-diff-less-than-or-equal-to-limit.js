/*
 * @lc app=leetcode id=1438 lang=javascript
 *
 * [1438] Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
  let answer = 0;
  const min = [];
  const max = [];
  let lt = 0;
  for (let i = 0; i < nums.length; i++) {
    // lt~ i 사이의 최소값, 최대값 후보 오름차순
    while (min.lenght && min[min.length - 1] > nums[i]) {
      min.pop();
    }
    while (max.length && max[max.length - 1] < nums[i]) {
      max.pop();
    }
    min.push(nums[i]);
    max.push(nums[i]);

    // console.log({ min, max, lt, i });
    while (Math.abs(min[0] - max[0]) > limit) {
      if (min[0] === nums[lt]) min.shift();
      if (max[0] === nums[lt]) max.shift();
      lt += 1;
    }

    answer = Math.max(answer, i - lt + 1);
  }
  return answer;
};
// @lc code=end
// console.log(longestSubarray([8, 2, 4, 7], 4));
