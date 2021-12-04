function solution(arr) {
  let answer = 0;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let flag = true;
      let cur = arr[i][j];
      for (let dir = 0; dir < 4; dir++) {
        let nx = i + dx[dir];
        let ny = j + dy[dir];

        if (nx >= 0 && ny >= 0 && nx < arr.length && ny < arr.length && arr[nx][ny] >= cur) {
          flag = false;
          break;
        }
      }
      if (flag) answer += 1;
    }
  }

  return answer;
}
let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
