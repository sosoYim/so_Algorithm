function solution(n, m, arr) {
  let answer = 0;
  let sum = 0;
  let lt = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt];
      lt += 1;
    }
    if (sum === m) answer += 1;
  }
  return answer;
}

console.log(solution(8, 6, [1, 2, 1, 3, 1, 1, 1, 2]));
