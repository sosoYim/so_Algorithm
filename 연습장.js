function solution(arr) {
  let answer = 0;
  const ch = Array.from({ length: 9 }, () => Array(9).fill(0));
  for (let [s1, s2] of arr) {
    ch[s1][s2] = 1;
    ch[s2][s1] = 1;
  }

  // console.log(ch);

  const visited = Array(9).fill(0);
  const tmp = [];

  // console.log(ch[4][3]);
  function DFS(L) {
    if (L === 9) {
      answer += 1;
      // console.log(tmp);
    } else {
      for (let i = 1; i < 9; i++) {
        if (visited[i] === 0) {
          tmp.push(i);
          visited[i] = 1;
          // console.log(L, ':', i, tmp[tmp.length - 1]);
          if (tmp.length === 1 || ch[tmp[tmp.length - 2]][i] === 0) DFS(L + 1);
          tmp.pop();
          visited[i] = 0;
        }
      }
    }
  }

  DFS(1);
  return answer;
}

// 총 인원 8명
console.log(
  solution([
    [5, 3],
    [4, 3],
    [4, 7],
    [3, 6],
  ])
); // 10560
