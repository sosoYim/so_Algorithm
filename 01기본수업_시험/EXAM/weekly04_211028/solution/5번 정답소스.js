function solution(enter, leave) {
  let n = enter.length;
  for (let i = 0; i < n; i++) enter[i]--;
  for (let i = 0; i < n; i++) leave[i]--;

  let answer = Array.from(Array(n), () => 0);
  let enterIndex = Array.from(Array(n), () => 0);

  for (let i = 0; i < n; i++) enterIndex[enter[i]] = i;
  //   console.log(enterIndex); // 0,2,3,1
  let enterAt = Array.from(Array(n), () => 0);
  let leaveAt = Array.from(Array(n), () => 0);

  for (let i = 0, j = 0, maxEnterAt = 0, cnt = 0; i < n; i++) {
    enterAt[enter[i]] = cnt++;
    while (j < n && Math.max(maxEnterAt, enterIndex[leave[j]]) === i) {
      maxEnterAt = Math.max(maxEnterAt, enterIndex[leave[j]]);
      leaveAt[leave[j]] = cnt++;
      j++;
    }
  }
  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++) {
      if (!(leaveAt[i] < enterAt[j] || leaveAt[j] < enterAt[i])) {
        answer[i]++;
        answer[j]++;
      }
    }
  return answer;
}
console.log(solution([1, 4, 2, 3], [2, 1, 3, 4])); //2 2 1 3
