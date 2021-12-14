function solution(n, edges, distanceThreshold) {
  let answer = Number.MIN_SAFE_INTEGER;
  let minCount = Number.MAX_SAFE_INTEGER;
  const nMap = new Map();
  for (let i = 0; i < n; i++) {
    nMap.set(i, []);
  }

  const possible = new Map(nMap);

  for (const [from, to, w] of edges) {
    nMap.set(from, [...nMap.get(from), [to, w]]);
    nMap.set(to, [...nMap.get(to), [from, w]]);
  }

  // 답에 넣었는지 체크
  let ch = Array.from({ length: n }, () => Array(n).fill(0));

  function DFS(ori, i, curW) {
    if (curW > distanceThreshold) return;

    for (let [to, w] of nMap.get(i)) {
      if (curW + w <= distanceThreshold && ch[i][to] === 0) {
        ch[i][to] = 1;
        ch[to][i] = 1;
        if (!possible.get(ori).includes(to)) {
          DFS(ori, to, curW + w);
          possible.set(ori, [...possible.get(ori), to]);
        }
        ch[i][to] = 0;
        ch[to][i] = 0;
      }
    }
  }
  for (let i = 0; i < n; i++) {
    ch = Array.from({ length: n }, () => Array(n).fill(0));
    DFS(i, i, 0);
  }

  console.log('pos', possible);

  for (let [key, val] of possible) {
    // console.log(answer, key, val.length, minCount);

    if (minCount >= val.length) {
      minCount = val.length;
      answer = Math.max(key, answer);
    }
  }
  return answer;
}
// const n = 4;
// const edges = [
//   [0, 1, 3],
//   [1, 2, 1],
//   [1, 3, 4],
//   [2, 3, 1],
// ];

// const distanceThreshold = 4;

// console.log(solution(n, edges, distanceThreshold));

// console.log(
//   solution(
//     5,
//     [
//       [0, 1, 2],
//       [0, 4, 8],
//       [1, 2, 3],
//       [1, 4, 2],
//       [2, 3, 1],
//       [3, 4, 1],
//     ],
//     2
//   )
// );

console.log(
  solution(
    4,
    [
      [0, 1, 3],
      [1, 2, 1],
      [1, 3, 4],
      [2, 3, 1],
    ],
    4
  )
);
