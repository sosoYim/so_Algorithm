// https://programmers.co.kr/learn/courses/30/lessons/12924

function solution(n) {
  let lt = 0;
  let answer = 0;
  let sum = 0;
  const nums = Array.from({ length: n }, (_, i) => i + 1);

  for (let rt = 0; rt < nums.length; rt++) {
    sum += nums[rt];
    if (sum === n) answer++;
    else if (sum > n) {
      while (sum > n && lt <= rt) {
        sum -= nums[lt++];
        if (sum === n) answer++;
      }
    }
  }

  return answer;
}

console.log(solution(15)); // 4
