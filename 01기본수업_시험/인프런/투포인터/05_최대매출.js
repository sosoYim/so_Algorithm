function solution(n, k, arr) {
  let max = 0;
  let sum = 0;
  let lt = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
    max = sum;
  }
  for (let rt = k; rt < arr.length; rt++) {
    sum += arr[rt];
    sum -= arr[lt];
    lt += 1;
    max = Math.max(max, sum);
  }
  return max;
}

console.log(solution(10, 3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
