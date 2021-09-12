function floydWarchall(N, roads, h) {
  const INF = 1e9;
  const graph = new Array(N + 1).fill().map(() => new Array(N + 1).fill(INF));
  //   console.log(graph);
  //acc 초기화를 안해주니까 0인덱스는 패스하네
  graph.reduce((acc, cur, i) => (cur[i] = 0));
  for (const [a, b, cost] of roads) {
    graph[a][b] = cost;
    graph[b][a] = cost;
  }
  for (let k = 1; k < N + 1; k++) {
    for (let i = 1; i < N + 1; i++) {
      for (let j = 1; j < N + 1; j++) {
        if (graph[i][j] > graph[i][k] + graph[k][j]) graph[i][j] = graph[i][k] + graph[k][j];
      }
    }
  }
  console.log(graph[1].filter(e => e <= h));
  return graph[1].filter(e => e <= h).length;
}

console.log(
  floydWarchall(
    5,
    [
      [1, 2, 1],
      [2, 3, 3],
      [5, 2, 2],
      [1, 4, 2],
      [5, 3, 1],
      [5, 4, 2],
    ],
    3
  )
);
