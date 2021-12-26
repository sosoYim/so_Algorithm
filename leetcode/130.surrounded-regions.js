/*
 * @lc app=leetcode id=130 lang=javascript
 *
 * [130] Surrounded Regions
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  function DFS(x, y) {
    board[x][y] = 'K';
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 0 && nx < board.length && ny >= 0 && ny < board[0].length) {
        if (board[nx][ny] === 'O') DFS(nx, ny);
      }
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (i === 0 || i === board.length - 1 || j === 0 || j === board[0].length - 1) {
        if (board[i][j] === 'O') {
          DFS(i, j);
        }
      }
    }
  }
  board.forEach((row, x) =>
    row.forEach((col, y) => (col === 'K' ? (board[x][y] = 'O') : (board[x][y] = 'X')))
  );
};
// @lc code=end
console.log(
  solve([
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'X'],
  ])
);
