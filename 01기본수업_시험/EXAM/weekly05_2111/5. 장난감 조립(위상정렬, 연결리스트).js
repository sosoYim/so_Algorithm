function solution(n, relations) {
  const answer = [];
  const graph = Array.from(Array(n + 1), () => Array());
  const indegrees = Array(n + 1).fill(0);
  const dy = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let Q = [];
  for (let [a, b, c] of relations) {
    graph[b].push([a, c]);
    indegrees[a]++;
  }
  for (let i = 1; i < n; i++) {
    if (indegrees[i] === 0) {
      Q.push(i);
      dy[i][i] = 1;
    }
  }
  // console.log(graph, indegrees);
  while (Q.length) {
    const cur = Q.shift(); // Q에는 하위 노드들이 다 계산되고 난 후의 것들만 들어감. 처음엔 말단 노드로 시작됨.
    // console.log(cur);
    for (let [next, cnt] of graph[cur]) {
      for (let i = 1; i < n; i++) {
        dy[i][next] += dy[i][cur] * cnt; // next 를 만드는 경우 = 1~n번까지의 모든 부품들 중 cur를 만드는 경우 * cnt
      }
      indegrees[next]--;
      if (indegrees[next] === 0) Q.push(next);
    }
  }
  for (let i = 1; i < n; i++) {
    if (dy[i][n] > 0) answer.push([i, dy[i][n]]);
  }
  return answer;
}
console.log(
  solution(7, [
    [5, 1, 2],
    [5, 2, 2],
    [7, 5, 2],
    [6, 5, 2],
    [6, 3, 3],
    [6, 4, 4],
    [7, 6, 3],
    [7, 4, 5],
  ])
);
// console.log(
//   solution(5, [
//     [5, 4, 3],
//     [5, 1, 5],
//     [5, 3, 4],
//     [4, 1, 1],
//     [4, 2, 3],
//   ])
// );
