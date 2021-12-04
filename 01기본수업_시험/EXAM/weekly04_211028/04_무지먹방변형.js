function solution(times, k) {
  let idx = 0;
  let totalWork = times.reduce((acc, v) => acc + v, 0);

  while (k > 0) {
    // console.log(k, times, idx, totalWork);

    // 일없음
    if (totalWork === 0) return -1;

    //처리하려는 인덱스에 일이 없다면 옮겨주기
    if (times[idx] === 0) {
      while (times[idx] === 0) {
        idx = idx === times.length - 1 ? 0 : idx + 1;
      }
    }

    // 일 하나 해치움
    const newWorkTime = times[idx] - 1;
    times[idx] = newWorkTime;
    totalWork -= 1;

    // 시간 째깍
    k -= 1;

    // 다음에 할 일 인덱스
    idx = idx === times.length - 1 ? 0 : idx + 1;
  }

  if (times[idx] === 0 && totalWork !== 0) {
    while (times[idx] === 0) {
      idx = idx === times.length - 1 ? 0 : idx + 1;
    }
  }

  // 기계는 1번 부터 시작
  return totalWork === 0 ? -1 : idx + 1;
}

console.log(solution([1, 2, 3], 5));
