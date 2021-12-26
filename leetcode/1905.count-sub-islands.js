/*
 * @lc app=leetcode id=1905 lang=javascript
 *
 * [1905] Count Sub Islands
 *
 * https://leetcode.com/problems/count-sub-islands/description/
 *
 * algorithms
 * Medium (62.07%)
 * Likes:    546
 * Dislikes: 20
 * Total Accepted:    17.2K
 * Total Submissions: 27.7K
 * Testcase Example:  '[[1,1,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,1,1]]\n' +
  '[[1,1,1,0,0],[0,0,1,1,1],[0,1,0,0,0],[1,0,1,1,0],[0,1,0,1,0]]'
 *
 * You are given two m x n binary matrices grid1 and grid2 containing only 0's
 * (representing water) and 1's (representing land). An island is a group of
 * 1's connected 4-directionally (horizontal or vertical). Any cells outside of
 * the grid are considered water cells.
 * 
 * An island in grid2 is considered a sub-island if there is an island in grid1
 * that contains all the cells that make up this island in grid2.
 * 
 * Return the number of islands in grid2 that are considered sub-islands.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: grid1 =
 * [[1,1,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,1,1]], grid2 =
 * [[1,1,1,0,0],[0,0,1,1,1],[0,1,0,0,0],[1,0,1,1,0],[0,1,0,1,0]]
 * Output: 3
 * Explanation: In the picture above, the grid on the left is grid1 and the
 * grid on the right is grid2.
 * The 1s colored red in grid2 are those considered to be part of a sub-island.
 * There are three sub-islands.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: grid1 =
 * [[1,0,1,0,1],[1,1,1,1,1],[0,0,0,0,0],[1,1,1,1,1],[1,0,1,0,1]], grid2 =
 * [[0,0,0,0,0],[1,1,1,1,1],[0,1,0,1,0],[0,1,0,1,0],[1,0,0,0,1]]
 * Output: 2 
 * Explanation: In the picture above, the grid on the left is grid1 and the
 * grid on the right is grid2.
 * The 1s colored red in grid2 are those considered to be part of a sub-island.
 * There are two sub-islands.
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * m == grid1.length == grid2.length
 * n == grid1[i].length == grid2[i].length
 * 1 <= m, n <= 500
 * grid1[i][j] and grid2[i][j] are either 0 or 1.
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function (grid1, grid2) {
  const width = grid1.length;
  const height = grid1[0].length;
  const visited = Array.from({ length: width }, () => Array(height).fill(0));
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let answer = 0;
  let flag;

  function DFS(x, y) {
    if (grid1[x][y] === 0) flag = false;
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 0 && nx < width && ny >= 0 && ny < height && grid2[nx][ny] === 1) {
        grid2[nx][ny] = 0;
        DFS(nx, ny);
        // flag = false;
      }
    }
    // if (flag) return isSub;
  }

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      flag = true;
      if (grid2[i][j] === 1) {
        DFS(i, j);
        // console.log(i, j);
        if (flag) answer += 1;
      }
    }
  }
  return answer;
};
// @lc code=end
// const grid1 = [
//   [1, 0, 1, 0, 1],
//   [1, 1, 1, 1, 1],
//   [0, 0, 0, 0, 0],
//   [1, 1, 1, 1, 1],
//   [1, 0, 1, 0, 1],
// ];
// const grid2 = [
//   [0, 0, 0, 0, 0],
//   [1, 1, 1, 1, 1],
//   [0, 1, 0, 1, 0],
//   [0, 1, 0, 1, 0],
//   [1, 0, 0, 0, 1],
// ];
// (grid1 = [
//   [1, 1, 1, 0, 0],
//   [0, 1, 1, 1, 1],
//   [0, 0, 0, 0, 0],
//   [1, 0, 0, 0, 0],
//   [1, 1, 0, 1, 1],
// ]),
//   (grid2 = [
//     [1, 1, 1, 0, 0],
//     [0, 0, 1, 1, 1],
//     [0, 1, 0, 0, 0],
//     [1, 0, 1, 1, 0],
//     [0, 1, 0, 1, 0],
//   ]);
// console.log(countSubIslands(grid1, grid2));
