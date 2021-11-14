// 무지의 먹방 라이브
// https://programmers.co.kr/learn/courses/30/lessons/42891

function solution(times, k) {
  times.unshift(0);
  let sT = times.slice();
  sT.sort((a, b) => a - b);
  let rest = times.length - 1;
  for (let i = 1; i < sT.length; i++) {
    // 그래프로 생각하기 : 이번 일이 사라질 만큼 돌기엔 남은 시간이 부족한가?
    if (k < rest * (sT[i] - sT[i - 1])) {
      // 정렬 안된 기존 배열에서 찾기
      let idx = k % rest; // 남은 시간 % 일의 종류 => 이번 턴에서 다 돌고 몇 번째일인가
      let cnt = 0; // 남은 일 중에서 하나씩 발견할 때마다 cnt;
      for (let j = 1; j < times.length; j++) {
        if (times[j] >= sT[i]) {
          // sT[i] 사라질 수 없는 일의 양
          if (cnt == idx) {
            return j;
          }
          cnt++;
        }
      }
      // 그래프로 생각하기 : 이번일이 사라질 만큼 돌 수 있다.
    } else {
      k -= rest * (sT[i] - sT[i - 1]); // 이번 일이 사라질만큼 시간이 자나감
      rest--; // 일의 종류를 줄여줌
    }
  }
  return -1;
}

console.log(solution([1, 4, 3], 7));
