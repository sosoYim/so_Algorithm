function solution(nums, m) {
  let answer = 0;
  function DFS(L, sum) {
    // console.log(sum);
    if (sum > m) return;
    if (sum === m) answer += 1;
    else {
      for (let i = 0; i < nums.length; i++) {
        DFS(L + 1, sum + nums[i]);
      }
    }
  }
  DFS(0, 0);
  return answer;
}

console.log(solution([1, 2, 5], 10));
