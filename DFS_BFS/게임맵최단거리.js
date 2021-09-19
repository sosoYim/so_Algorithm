//https://programmers.co.kr/learn/courses/30/lessons/1844

function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const dist = Array.from(Array(n), () => Array(m).fill(0));
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const queue = [[0, 0]];
  dist[0][0] = 1;

  function BFS() {
    while (queue.length) {
      const cur = queue.shift();
      for (let i = 0; i < 4; i++) {
        const x = dx[i] + cur[0];
        const y = dy[i] + cur[1];

        if (x >= 0 && x < n && y >= 0 && y < m && maps[x][y] === 1) {
          //이미 찾은 값보다 더 작은 수라면
          if (dist[x][y] === 0 || dist[x][y] > dist[cur[0]][cur[1]] + 1) {
            dist[x][y] = dist[cur[0]][cur[1]] + 1;
            queue.push([x, y]);
          }
        }
        // console.log(`cur : x y : dist ${cur} : ${x} ${y} : ${dist}`);
      }
    }
  }
  BFS();
  return dist[n - 1][m - 1] > 0 ? dist[n - 1][m - 1] : -1;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
//11
// console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]));
//-1
