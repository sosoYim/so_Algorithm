/**
 * https://leetcode.com/problems/max-area-of-island/
 * You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0.

 
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let answer = 0;

  // 깊이(세아린 칸 갯수 ?)
  function DFS(x, y, cnt) {
    let flag = true;
    for (let i = 0; i < dx.length; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < grid.length && ny >= 0 && ny < grid[0].length && grid[nx][ny] === 1) {
        flag = false;
        grid[nx][ny] = 0;
        cnt[0] += 1;
        // console.log(nx, ny, 'continue', L + 1, cnt);
        DFS(nx, ny, cnt);
      }
    }
    if (flag) {
      // console.log(x, y, 'ended', L);
      answer = Math.max(answer, cnt[0]);
    }
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        grid[i][j] = 0;
        // console.log(i, j, 'start');
        DFS(i, j, [1]);
      }
    }
  }
  return answer;
};

console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ])
); // 6
