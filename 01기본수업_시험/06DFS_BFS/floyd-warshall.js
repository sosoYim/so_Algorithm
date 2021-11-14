function floydWarchall(N, road, h) {
  //무한값
  const INF = 1e9;
  // 1. 결과 담을 그래프 만들기
  // 1번 노드를 인덱스 1에 넣기 위해 N+1 길이를 가진다.
  // 배열의 1~N+1 인덱스마다 각각의 다른 노드까지 가는데 걸리는 최소값이 들어갈 배열 생성
  // 무한값으로 초기화되어 있음
  // 제자리는 0 값 넣어줌 (graph[1][1], graph[2],[2]...)
  const graph = new Array(N + 1).fill().map(() => new Array(N + 1).fill(INF));
  for (let i = 1; i < N + 1; i++) {
    graph[i][i] = 0;
  }

  // 3. 서로 인접한 노드끼리 가중치 넣기
  for (const [x, y, cost] of road) {
    graph[x][y] = Math.min(cost, graph[x][y]);
    graph[y][x] = Math.min(cost, graph[y][x]);
  }

  //3. 모든 노드에서 모든 노드까지의 최소거리
  // k를 거치는 모든 노드
  // a에서 출발해
  // b까지 가는...???
  for (let k = 1; k < N + 1; k++) {
    // console.log(graph);
    // console.log(`${k} k START`);
    for (let a = 1; a < N + 1; a++) {
      //   console.log(`${graph[a]} a START`);
      for (let b = 1; b < N + 1; b++) {
        // console.log(`${b} start`);
        // console.log(`${graph[a][b]} : ${graph[a][k]} + ${graph[k][b]}`);
        graph[a][b] = Math.min(graph[a][b], graph[a][k] + graph[k][b]);
      }
    }
  }

  // 4. 결과 (문제에 따라)
  return graph[1].filter(el => el <= h).length;
}

// console.log(
//   floydWarchall(
//     5,
//     [
//       [1, 2, 1],
//       [2, 3, 3],
//       [5, 2, 2],
//       [1, 4, 2],
//       [5, 3, 1],
//       [5, 4, 2],
//     ],
//     3
//   )
// );
console.log(
  floydWarchall(
    6,
    [
      [1, 2, 1],
      [1, 3, 2],
      [2, 3, 2],
      [3, 4, 3],
      [3, 5, 2],
      [3, 5, 3],
      [5, 6, 1],
    ],
    4
  )
);
