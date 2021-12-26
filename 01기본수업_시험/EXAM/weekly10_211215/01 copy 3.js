function solution(nums) {
  let maxLeft = nums[0];
  let maxRight = nums[0];
  let pivot = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > maxRight) {
      maxRight = nums[i];
    }
    if (nums[i] < maxLeft) {
      maxLeft = maxRight;
      pivot = i;
    }
  }
  return pivot + 1;
}

console.log(solution([5, 0, 3, 8, 6]));
