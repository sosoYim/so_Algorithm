function solution(nums) {
  var answer = 0;
  let lt = 0;
  let dif = nums[1] - nums[0];
  for (let rt = 2; rt < nums.length; rt++) {
    while (nums[rt] - nums[rt - 1] !== dif && lt < rt) {
      lt += 1;
      dif = nums[lt + 1] - nums[lt];
    }
    const len = rt - lt + 1;
    if (len >= 3) answer = answer + len - 2;
  }

  return answer;
}

console.log(solution([1, 2, 3, 5, 7, 6, 5, 4]));
// console.log(solution([1, 2, 3, 4, 5]));
