2;
3;
4;
5;
6;
7;
8;
9;
10;
11;
12;
13;
14;
15;
16;
17;
18;
19;
20;
21;
22;
23;
24;
25;
26;
27;
28;
29;
30;
31;
32;
33;
34;
35;
36;
37;
38;
39;
40;
41;
42;
43;
44;
45;
46;
47;
48;
49;
function solution(grid) {
  const target = [];
  const start = [];

  const n = grid.length;
  const m = grid[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) target.push([i, j]);
      else if (grid[i][j] === 0) start.push([i, j]);
    }
  }

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  let ans = Number.MAX_SAFE_INTEGER;

  while (start.length) {
    const [ix, iy] = start.shift();
    const q = [[ix, iy]];
    const chk = new Array(n).fill().map(() => new Array(m).fill(0));

    chk[ix][iy] = 1;

    while (q.length) {
      const [x, y] = q.shift();

      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];

        if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
          if (chk[nx][ny] === 0 && grid[nx][ny] !== 2) {
            chk[nx][ny] = chk[x][y] + 1;
            if (grid[nx][ny] === 0) q.push([nx, ny]);
          }
        }
      }
    }
    if (target.filter(([x, y]) => chk[x][y]).length === target.length) {
      const b = target.reduce((acc, [x, y]) => acc + chk[x][y] - 1, 0);

      ans = Math.min(ans, b);
    }
  }

  return ans === Number.MAX_SAFE_INTEGER ? -1 : ans;
}

console.log(
  solution([
    [1, 0, 2, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
  ])
); // 7
