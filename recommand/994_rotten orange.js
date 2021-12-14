/**
 * You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

 
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let answer = 0;
  const width = grid.length;
  const height = grid[0].length;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const Q = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 2) Q.push([i, j]);
    }
  }

  while (Q.length) {
    // console.log(Q);
    // 레벨로 풀어야 한다!!
    const len = Q.length;

    answer += 1;
    for (let i = 0; i < len; i++) {
      const [x, y] = Q.shift();
      for (let i = 0; i < dx.length; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx >= 0 && nx < width && ny >= 0 && ny < height && grid[nx][ny] === 1) {
          grid[nx][ny] += 1;
          Q.push([nx, ny]);
        }
      }
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) return -1;
    }
  }

  return answer;
};

// console.log(
//   orangesRotting([
//     [2, 1, 1],
//     [1, 1, 0],
//     [0, 1, 1],
//   ])
// ); // 4

console.log(
  orangesRotting([
    [2, 2],
    [1, 1],
    [0, 0],
    [2, 0],
  ])
); // 1
