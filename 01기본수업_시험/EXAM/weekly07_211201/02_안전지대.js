function solution(board) {
  let answer = 0;
  let ch = Array.from({ length: board.length }, () => Array(board.length).fill(0));
  let safe = 0;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  function DFS(x, y, h) {
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      // 좌표 범위 안, 보드 값이 기준치보다 높고 ch 체크 안된 것
      if (
        nx >= 0 &&
        nx < board.length &&
        ny >= 0 &&
        ny < board.length &&
        board[nx][ny] > h &&
        ch[nx][ny] === 0
      ) {
        ch[nx][ny] = 1;
        DFS(nx, ny, h);
      }
    }
  }

  for (let height = 1; height <= 100; height++) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        const cur = board[i][j];
        // let height = 6; // 4
        if (cur > height && ch[i][j] === 0) {
          safe += 1;
          ch[i][j] = 1;
          // console.log(i, j, cur);
          // 기준 높이 이상 && ch[i][j]===0
          // safe +=1; ch 체크
          // DFS로 인접한 영역 ch 다 돌리기
          DFS(i, j, height);
        }
        if (cur > height && ch[i][j] === 0) console.log(i, j, ch);
      }
    }
    // console.log(`${height} 높이 탐색 결과 : ${safe}`);
    answer = Math.max(answer, safe);
    safe = 0;
    ch = ch.map(row => row.map(() => 0));
  }

  return answer;
}

console.log(
  solution([
    [6, 8, 2, 6, 2],
    [3, 2, 3, 4, 6],
    [6, 7, 3, 3, 2],
    [7, 2, 5, 3, 6],
    [8, 9, 5, 2, 7],
  ])
);
/**
 * ▣ 출력설명
첫장마철에 물에 잠기지 않는 안전한영역의 최대 개수를 반환한다.

▣ 매개변수 형식 1
[[6, 8, 2, 6, 2],
[3, 2, 3, 4, 6],
[6, 7, 3, 3, 2],
[7, 2, 5, 3, 6],
[8, 9, 5, 2, 7]]

▣ 반환값 형식 1
5
 */
