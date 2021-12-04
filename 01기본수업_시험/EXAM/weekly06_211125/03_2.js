function solution(w, h, t, s, points) {
  var answer = 0;
  const ground = Array.from({ length: w + 1 }, () => Array(h + 1).fill(0));
  for (let [wid, height] of points) {
    ground[wid][height] = 1;
  }
  // console.log(ground);

  function getOrange(i, j) {
    let orange = 0;
    for (let h = 0; h <= s; h++) {
      for (let k = 0; k <= s; k++) {
        orange += ground[i + h][j + k];
      }
    }
    return orange;
  }

  for (let i = 0; i < ground.length - s; i++) {
    for (let j = 0; j < ground[0].length - s; j++) {
      if (ground[i][j] === 1) {
        console.log(i, j, getOrange(i, j));
        answer = Math.max(getOrange(i, j), answer);
      }
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
