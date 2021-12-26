// https://leetcode.com/problems/subarray-sum-equals-k/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 요소가 음수일 수 있음
 */
var subarraySum = function (nums, k) {
  let answer = 0;
  const nMap = new Map();
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum === k) answer += 1;
    answer += nMap.get(sum - k) || 0;
    nMap.set(sum, (nMap.get(sum) || 0) + 1);
  }
  return answer;
};

// console.log(subarraySum([1, 2, 3], 3)); // 2
console.log(subarraySum([1], 0)); // 0
console.log(subarraySum([-1, -1, 1], 0)); // 1
