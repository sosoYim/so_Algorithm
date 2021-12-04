function solution(n, relations) {
  // 관계 그래프
  const graph = Array(n + 1)
    .fill()
    .map(() => new Array(0));
  // indegree
  const indegree = Array(n + 1).fill(0);
  // dy
  const dy = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  // Q
  const Q = [];
  // 정답. [[부품, 갯수]...]
  const result = [];

  // 초기화1 :
  // 관계 graph[재료부품] = [[만들어지는 부품, 갯수], ... ]
  // indegree[만들어지는 부품] += 1;
  for (const [made, ingrediant, cnt] of relations) {
    graph[ingrediant].push([made, cnt]);
    indegree[made] += 1;
  }

  // 초기화2 : (하위 부품이 없는 경우, 즉, indegree[부품] = 0)
  // dy[부품][부품] = 1 로 시드 넣기 (하위 부품이 없는 경우 자기 자신을 만드는데 필요한 갯수는 1이다.)
  // Q 대기열에 넣는다.
  for (let i = 1; i < n; i++) {
    if (indegree[i] === 0) {
      dy[i][i] = 1;
      Q.push(i);
    }
  }
  // console.log(graph, indegree);

  while (Q.length) {
    const cur = Q.shift();
    for (let [next, cnt] of graph[cur]) {
      for (let i = 1; i < n; i++) {
        dy[i][next] += dy[i][cur] * cnt;
      }
      indegree[next] -= 1;
      if (indegree[next] === 0) Q.push(next);
    }
  }

  // console.log(graph, dy);

  for (let i = 1; i < n; i++) {
    if (dy[i][n] > 0) result.push([i, dy[i][n]]);
  }

  return result;
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
