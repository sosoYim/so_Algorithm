function solution(grid) {
  var answer = Number.MAX_SAFE_INTEGER;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  /**
   * targets[[x,y]] : 빌딩이 있는 좌표들 (grid 값이 1)
   * starts[[x,y]] : 레벨 탐색할 좌표들, 답인지 확인할 후보들이 된다. (grid 값이 0)
   */

  // starts를 shift 해가며 모두 돈다.
  // q 의 시작좌표부터 이동거리를 넣어줄 ch 배열을 0으로 초기화한다.
  // => q[] 를 생성하여 해당 좌표로 부터 갈 수 있는 좌표들을 넣어주고
  // => ch 배열에 거리를 넣어준다.
  // target 배열들을 순회하며 모든 해당 좌표의 ch 배열의 값이 0 초과이면, 각각의 값들의 합을 answer 와 비교해
  // 최소값을 구해간다.

  // 1. 방문할 지점, 시작지점 초기화
  const targets = [];
  const starts = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) targets.push([i, j]);
      if (grid[i][j] === 0) starts.push([i, j]);
    }
  }

  while (starts.length) {
    const [orix, oriy] = starts.shift();
    const ch = Array.from({ length: grid.length }, () => Array(grid[0].length).fill(0));
    ch[orix][oriy] = 1;
    // console.log(orix, oriy, 'start');
    const q = [[orix, oriy]];

    while (q.length) {
      const [x, y] = q.shift();
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (
          nx >= 0 &&
          nx < grid.length &&
          ny >= 0 &&
          ny < grid[0].length &&
          ch[nx][ny] === 0 &&
          grid[nx][ny] !== 2
        ) {
          // console.log(nx, ny);
          ch[nx][ny] = ch[x][y] + 1;
          if (grid[nx][ny] === 0) {
            q.push([nx, ny]);
          }
        }
      }
    }
    // console.log(ch);

    if (targets.every(([x, y]) => ch[x][y] > 0)) {
      answer = Math.min(
        answer,
        targets.reduce((acc, [x, y]) => ch[x][y] - 1 + acc, 0)
      );
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
