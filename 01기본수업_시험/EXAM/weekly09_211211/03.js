function solution(grid) {
  var answer = Number.MAX_SAFE_INTEGER;
  // const buildings = new Map();
  const ch = Array.from({ length: grid.length }, () => Array(grid[0].length).fill(0));
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let leftVisit = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) leftVisit += 1;
    }
  }
  console.log(leftVisit);

  function DFS(L, x, y, leftVisit, totalDist, distFromOrigin) {
    distFromOrigin += 1;
    console.log(L, x, y, leftVisit);
    if (answer !== 0 && totalDist >= answer) return;
    if (leftVisit === 0) {
      console.log('finished', answer, totalDist);
      answer = Math.min(answer, totalDist);
      return;
    }
    for (let i = 0; i < 4; i++) {
      nx = dx[i] + x;
      ny = dy[i] + y;
      if (nx >= 0 && ny >= 0 && nx < grid.length && ny < grid[0].length && ch[nx][ny] === 0) {
        if (grid[nx][ny] === 0) {
          ch[nx][ny] = 1;
          DFS(L + 1, nx, ny, leftVisit, totalDist);
          ch[nx][ny] = 0;
        } else if (grid[nx][ny] === 1) {
          leftVisit -= 1;
          totalDist += L;
          // min = Math.min(min, L);
          console.log('visited', nx, ny, ':', leftVisit, totalDist);
          ch[nx][ny] = 1;
          // DFS(L + 1, x, y, leftVisit, totalDist);
          // Q.push([x,y]);
        }
      }
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      let startVisit = leftVisit;
      console.log('start', i, j);
      if (grid[i][j] === 0) DFS(0, i, j, startVisit, 0);
    }
  }

  return answer === Number.MAX_SAFE_INTEGER ? -1 : answer;
}

console.log(
  solution([
    [1, 0, 2, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
  ])
); // 7
