// https://programmers.co.kr/learn/courses/30/lessons/72413
// 지점 n, 출발 s, a도착, b도착, 지점간 거리 배열[지점,지점,요금]
// TODO: 기본 테케 1/3

function solution(n, s, a, b, fares) {
  const INF = 1e9;
  const dist = Array.from({ length: n + 1 }, () => Array(n + 1).fill(INF));
  for (let i = 1; i < dist.length; i++) {
    dist[i][i] = 0;
  }
  for (let [a, b, cost] of fares) {
    dist[a][b] = Math.min(dist[a][b], cost);
    dist[b][a] = Math.min(dist[b][a], cost);
  }

  for (let k = 1; k < n + 1; k++) {
    for (let a = 1; a < n + 1; a++) {
      for (let b = 1; b < n + 1; b++) {
        dist[a][b] = Math.min(dist[a][b], dist[a][k] + dist[k][b]);
      }
    }
  }
  // console.log(dist);
  // console.log(dist[s][a], dist[s][b]);

  return dist[s][a] + dist[s][b];
}

console.log(
  solution(7, 3, 4, 1, [
    [5, 7, 9],
    [4, 6, 4],
    [3, 6, 1],
    [3, 2, 3],
    [2, 1, 6],
  ])
); // 14
