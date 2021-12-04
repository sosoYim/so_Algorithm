function solution(arr, sec) {
  const nMap = new Map();
  const sum = arr.reduce((acc, v) => acc + v, 0);
  console.log(sum);

  // 전기가 도는 동안 작업처리
  arr.forEach((v, i) => nMap.set(i, v));
  let idx = 0;
  while (sec) {
    if (nMap.get(idx) > 0) {
      nMap.set(idx, nMap.get(idx) - 1);
      sec -= 1;
    }
    idx = idx === arr.length - 1 ? 0 : (idx += 1);
  }
  // console.log(nMap);
  idx += 1;

  // 전기가 나갔다!

  // 모든 작업이 마쳤을 경우
  // const restWorks = [...nMap];

  // 남은 작업이 있는 경우
  while (true) {
    if (nMap.get(idx) !== 0) {
      return idx;
    } else {
      idx = idx === arr.length - 1 ? 0 : (idx += 1);
    }
  }
}

console.log(solution([3, 6, 3, 2, 7, 8], 21)); // 4

// 작업 번호는 1부터 시작
// 모든 작업이 다 마쳤을 경우 return -1
