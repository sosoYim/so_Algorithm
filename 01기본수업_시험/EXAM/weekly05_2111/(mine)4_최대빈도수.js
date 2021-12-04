function solution(nums, k) {
  nums.sort((a, b) => a - b);
  let answer = 0;
  let lt = 0;
  let sum = 0;

  for (let rt = 0; rt < nums.length; rt++) {
    sum += nums[rt];
    while (nums[rt] * (rt - lt + 1) > k + sum) {
      sum -= nums[lt];
      lt += 1;
    }
    answer = Math.max(answer, rt - lt + 1);
  }
  return answer;
}

console.log(solution([5, 7, 8, 2, 9, 6, 3], 10)); // 5
console.log(solution([-1, 1, 2, 4, 0, -2], 6)); // 4
