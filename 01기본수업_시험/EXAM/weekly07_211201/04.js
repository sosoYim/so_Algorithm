function solution(grid, clockwise) {
  const gridArr = [];
  for (let i = 0; i < grid.length; i++) {
    gridArr.push([...grid[i]].map(v => v));
  }

  // console.log(gridArr);
  const rotated = new Map();
  for (let i = 0; i < grid.length; i++) {
    rotated.set(i, []);
  }
  if (clockwise) {
    for (let i = 0; i < grid[grid.length - 1].length; i++) {
      // console.log(i, 'start');
      let xIn = grid.length - 1;
      for (let j = 0; j < grid.length; j++) {
        // console.log(gridArr[j][i]);
        if (gridArr[j][i]) {
          rotated.get(xIn).unshift(gridArr[j][i]);
          xIn = xIn > 1 ? xIn - 1 : 0;
        }
      }
    }
  } else {
    for (let i = 0; i < grid[grid.length - 1].length; i++) {
      console.log(i, 'start');
      let xIn = grid.length - 1;
      for (let j = grid.length - 1; j >= 0; j--) {
        console.log(j, gridArr[j][i]);
        if (gridArr[j][i]) {
          rotated.get(xIn).unshift(gridArr[j][i]);
          xIn = xIn > 1 ? xIn - 1 : 0;
        }
      }
    }
  }
  // console.log(rotated);
  const result = [];
  for (let [key, val] of rotated) {
    result.push(val.join(''));
  }
  return result;
}
console.log(solution(['1', '234', '56789'], false));
// console.log(solution(['1', '234', '56789'], true));
