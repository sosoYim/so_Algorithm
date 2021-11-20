// https://www.acmicpc.net/problem/2042
/* 
어떤 N개의 수가 주어져 있다. 그런데 중간에 수의 변경이 빈번히 일어나고 
그 중간에 어떤 부분의 합을 구하려 한다. 만약에 1,2,3,4,5 라는 수가 있고, 
3번째 수를 6으로 바꾸고 2번째부터 5번째까지 합을 구하라고 한다면 
17을 출력하면 되는 것이다. 
그리고 그 상태에서 다섯 번째 수를 2로 바꾸고 3번째부터 5번째까지 합을 구하라고 한다면 
12가 될 것이다.

첫째 줄에 수의 개수 N(1 ≤ N ≤ 1,000,000)과 
M(1 ≤ M ≤ 10,000), K(1 ≤ K ≤ 10,000) 가 주어진다. 
M은 수의 변경이 일어나는 횟수이고, K는 구간의 합을 구하는 횟수이다. 
그리고 둘째 줄부터 N+1번째 줄까지 N개의 수가 주어진다. 그리고 N+2번째 줄부터 N+M+K+1번째 줄까지 세 개의 정수 a, b, c가 주어지는데, a가 1인 경우 b(1 ≤ b ≤ N)번째 수를 c로 바꾸고 a가 2인 경우에는 b(1 ≤ b ≤ N)번째 수부터 
c(b ≤ c ≤ N)번째 수까지의 합을 구하여 출력하면 된다.
입력으로 주어지는 모든 수는 -263보다 크거나 같고, 263-1보다 작거나 같은 정수이다.
 */

function solution(nums, order) {
  let answer = [];
  const N = nums.length;

  // 배열 사전 작업
  let arr = Array(100).fill(0);
  let s = 1;
  while (s < N) {
    s *= 2;
  }

  // 위에서 구한 부모 노드들의 갯수 이후에 노드들 값을 추가
  for (let i = 0; i < N; i++) {
    arr[s + i] = nums[i];
  }

  for (let i = s - 1; i > 0; i--) {
    arr[i] = arr[i * 2] + arr[i * 2 + 1];
  }

  // update
  function update(idx, val) {
    while (idx > 0) {
      arr[idx] += val;
      idx = Math.floor(idx / 2);
    }
  }

  // get
  function get(s, e) {
    let result = 0;
    while (s <= e) {
      if (s % 2 === 1) result += arr[s];
      if (e % 2 === 0) result += arr[e];
      s = Math.floor((s + 1) / 2);
      e = Math.floor((e - 1) / 2);
    }
    return result;
  }

  for (const [a, b, c] of order) {
    if (a === 1) {
      update(s + b - 1, c - arr[s + b - 1]);
    } else {
      answer.push(get(s + b - 1, s + c - 1));
    }
  }

  return answer;
}

console.log(
  solution(
    [1, 2, 3, 4, 5],
    [
      [1, 3, 6],
      [2, 2, 5],
      [1, 5, 2],
      [2, 3, 5],
    ]
  )
);
