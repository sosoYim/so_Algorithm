function solution(cells, n) {
  // var answer = [];
  if (n % 14 == 0) {
    n = 14;
  } else {
    n = n % 14;
  }
  if (n === 0) return cells;

  while (n > 0) {
    const temp = [...cells];
    temp[0] = 0;
    temp[temp.length - 1] = 0;

    for (let i = 1; i < cells.length - 1; i++) {
      const prev = cells[i - 1];
      const next = cells[i + 1];
      if (prev === next) temp[i] = 1;
      else temp[i] = 0;
    }
    // console.log(temp);
    cells = [...temp];
    n -= 1;
  }
  return cells;
}
console.log(solution([0, 1, 0, 1, 1, 0, 0, 1], 50));
// 0, 1, 0, 0, 0
// 0, 1, 0, 1, 0

// function update(L) {
//   if (L === n) return;

//   const temp = [...cells];
//   temp[0] = 0;
//   temp[temp.length - 1] = 0;

//   for (let i = 1; i < cells.length - 1; i++) {
//     const prev = cells[i - 1];
//     const next = cells[i + 1];
//     if (prev === next) temp[i] = 1;
//     else temp[i] = 0;
//   }
//   // console.log({ L, temp, cells });
//   cells = [...temp];
//   update(L + 1);
// }
// update(0);
