/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  function DFS(x, y) {
    board[x][y] = 'W';
    for (let i = 0; i < dx.length; i++) {
      const nx = dx[i] + x;
      const ny = dy[i] + y;
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < board.length &&
        ny < board[0].length &&
        board[nx][ny] !== 'X' &&
        board[nx][ny] !== 'W'
      ) {
        DFS(nx, ny);
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (
        (i === 0 || j === 0 || i === board.length - 1 || j === board[0].length - 1) &&
        board[i][j] === 'O'
      ) {
        // 모서리고 O 면
        DFS(i, j);
      }
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      board[i][j] = board[i][j] === 'W' ? 'O' : 'X';
    }
  }

  return board;
};

// console.log(
//   solve([
//     ['X', 'X', 'X', 'X'],
//     ['X', 'O', 'O', 'X'],
//     ['X', 'X', 'O', 'X'],
//     ['X', 'O', 'X', 'X'],
//   ])
// );
console.log(
  solve([
    ['O', 'O'],
    ['O', 'O'],
  ])
);
