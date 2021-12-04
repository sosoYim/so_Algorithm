function solution(w, h, t, s, points) {
  var answer = 0;
  const ground = Array.from({ length: w + 1 }, () => Array(h + 1).fill(0));
  for (let [wid, height] of points) {
    ground[wid][height] = 1;
  }
  // console.log(ground);

  for (let i = 0; i < ground.length - s; i++) {
    for (let j = 0; j < ground[0].length - s; j++) {
      let orange = 0; // 기준점 ground[i][j]
      console.log(`ground[${i}][${j}], ${orange}`);
      for (let k = 0; k <= s; k++) {
        for (let h = 0; h <= s; h++) {
          orange += ground[i + k][j + h];
          console.log(`ground[${i + k}][${j + h}], ${orange}`);
        }
      }
      answer = Math.max(answer, orange);
    }
  }

  return answer;
}

console.log(
  solution(10, 9, 8, 3, [
    [3, 4],
    [6, 3],
    [5, 7],
    [6, 6],
    [9, 5],
    [6, 9],
    [7, 8],
    [8, 9],
  ])
);
