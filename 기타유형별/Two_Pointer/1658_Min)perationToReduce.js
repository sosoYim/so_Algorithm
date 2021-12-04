/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 * 가장 왼쪽, 오른쪽을 선택할 수 있다면 => 연속 부분 집합을 생각하자.
 */
var minOperations = function (nums, x) {
  const total = nums.reduce((acc, val) => acc + val, 0);
  const target = total - x;
  if (target < 0) return -1;
  let lt = 0;
  let sum = 0;
  let max = -Infinity;
  for (let rt = 0; rt < nums.length; rt++) {
    sum += nums[rt];
    while (sum > target) {
      sum -= nums[lt++];
    }
    if (sum === target) max = Math.max(max, rt - lt + 1);
  }
  return max === -Infinity ? -1 : nums.length - max;
};

console.log(minOperations([1, 1, 4, 2, 3], 5)); // 2
console.log(minOperations([1, 1], 3)); // -1
