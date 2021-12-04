function solution(nums) {
  let result = 0;
  let up = 1,
    down = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] < 0) {
      down += 1;
      if (nums[i + 1] - nums[i] >= 0 || i === nums.length) {
        result = Math.max(down, result);
        down = 1;
      }
    } else if (nums[i] - nums[i - 1] > 0) {
      up += 1;
      if (nums[i + 1] - nums[i] <= 0 || i === nums.length) {
        result = Math.max(up, result);
        up = 1;
      }
    }
  }

  return result;
}

console.log(solution([5, 3, 6, 7, 9, 8, 5, 3, 1, 2]));
