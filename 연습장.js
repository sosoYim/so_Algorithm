function solution(board) {
  let answer = 0;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const q = [];
  const dist = Array.from({ length: board.length }, () => Array(board[0].length).fill(0));

  function BFS() {
    while (q.length) {
      const [x, y] = q.shift();
      for (let i = 0; i < 4; i++) {
        const [nX, nY] = [dx[i] + x, dy[i] + y];
        if (
          nX >= 0 &&
          nY >= 0 &&
          nX < board.length &&
          nY < board[0].length &&
          board[nX][nY] === 0
        ) {
          board[nX][nY] = 1;
          dist[nX][nY] = dist[x][y] + 1;
          q.push([nX, nY]);
          answer = Math.max(answer, dist[nX][nY]);
        }
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 1) q.push([i, j]);
    }
  }

  BFS();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 0) return -1;
    }
  }
  return answer;
}

console.log(
  solution([
    [0, 0, -1, 0, 0, 0],
    [0, 0, 1, 0, -1, 0],
    [0, 0, -1, 0, 0, 0],
    [0, 0, 0, 0, -1, 1],
  ])
);
