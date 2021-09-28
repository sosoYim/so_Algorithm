function solution(nums) {
  let height = 0;
  let tmpMin = nums[0];
  for (let i = 1; i < nums.length; i++) {
    console.log(`${nums[i]} : ${nums[i - 1]}`);
    if (nums[i] - nums[i - 1] <= 0) {
      height = Math.max(nums[i - 1] - tmpMin, height);
      tmpMin = nums[i];
    }
  }

  height = Math.max(nums[nums.length - 1] - tmpMin, height);

  return height;
}

console.log(solution([5, 2, 4, 7, 7, 3, 9, 10, 11]));
