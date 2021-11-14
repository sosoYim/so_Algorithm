// 무지의 먹방 라이브
// https://programmers.co.kr/learn/courses/30/lessons/42891

function solution(times, k) {
  times.unshift(0);
  let sT = times.slice();
  sT.sort((a, b) => a - b);
  let rest = times.length - 1;
  for (let i = 1; i < sT.length; i++) {
    if (k < rest * (sT[i] - sT[i - 1])) {
      let idx = k % rest;
      let cnt = 0;
      for (let j = 1; j < times.length; j++) {
        if (times[j] >= sT[i]) {
          if (cnt == idx) {
            return j;
          }
          cnt++;
        }
      }
    } else {
      k -= rest * (sT[i] - sT[i - 1]);
      rest--;
    }
  }
  return -1;
}

console.log(solution([1, 2, 3], 7));
