/**
 * DP 기본
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // dy = 해당 인덱스를 포함 왼쪽 요소들 중 가장 큰 것
  const dy = Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] < nums[i]) dy[i] = Math.max(dy[j] + 1, dy[i]);
    }
  }

  return Math.max(...dy);
};

console.log(lengthOfLIS([0, 1, 0, 3, 2, 3])); // 4
