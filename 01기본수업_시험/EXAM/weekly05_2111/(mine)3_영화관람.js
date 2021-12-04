// https://leetcode.com/problems/daily-temperatures/
// 739

function solution(nums) {
  const answer = [];
  for (let rt = 0; rt < nums.length; rt++) {
    const stack = nums.slice(0, rt + 1);
    while (stack[stack.length - 1] <= nums[rt] && stack.length > 0) {
      stack.pop();
    }
    answer.push(stack.length);
  }
  return answer;
}
console.log(solution([50, 57, 52, 53, 51]));
//console.log(solution([50, 46, 55, 76, 65, 50, 55, 53, 55, 50]));
