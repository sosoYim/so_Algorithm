function solution(N, road, h) {
  const INF = 1e9;
  const dist = Array.from({ length: N + 1 }, () => Array(N + 1).fill(INF));
  for (let i = 1; i < dist.length; i++) {
    dist[i][i] = 0;
  }
  for (let [x, y, cost] of road) {
    dist[x][y] = Math.min(cost, dist[x][y]);
    dist[y][x] = Math.min(cost, dist[y][x]);
  }

  for (let k = 1; k <= N; k++) {
    for (let a = 1; a <= N; a++) {
      for (let b = 1; b <= N; b++) {
        dist[a][b] = Math.min(dist[a][b], dist[a][k] + dist[k][b]);
      }
    }
  }
  console.log(dist[1]);
  return dist[1].filter(el => el <= h).length;
}

console.log(
  solution(
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
