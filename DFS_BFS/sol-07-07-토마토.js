//큐(queue)에 익은 토마토의 좌표들을 먼저 채워넣는다.
//하나씩 shift 하며 익은 토마토들을 기준으로 동시다발적으로 blood fill
//board에서 안 익은 토마토가 있는지 확인하며
//dist의 같은 위치에 익는데 걸리는 일수 입력
//board에서 체크한 토마토는 1로 바꿔준다.
//다 돌고난 후 0이 있는지 체크 : 있으면 -1 반환

function solution(board) {
  let answer = 0;
  const queue = [];
  const row = board.length;
  const col = board[0].length;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const dist = Array.from(Array(row), () => Array(col).fill(0));

  function BFS() {
    while (queue.length) {
      const cur = queue.shift();
      for (let i = 0; i < 4; i++) {
        const x = cur[0] + dx[i];
        const y = cur[1] + dy[i];
        if (x >= 0 && x < row && y >= 0 && y < col && board[x][y] === 0) {
          board[x][y] = 1;
          dist[x][y] = dist[cur[0]][cur[1]] + 1;
          queue.push([x, y]);
          answer = Math.max(dist[x][y], answer);
        }
      }
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === 1) queue.push([i, j]);
    }
  }

  BFS();

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === 0) answer = -1;
    }
  }
  return answer;
}

console.log(
  solution([
    [0, 0, -1, 0, 0, 0],
    [0, 0, 1, 0, -1, 0],
    [0, 0, -1, 0, 0, 0],
    [0, 0, 0, 0, -1, 1],
  ])
);
//4

/*
  토마토(BFS)
  현수의 토마토 농장에서는 토마토를 보관하는 큰 창고를 가지고 있다. 토마토는 아래의 그림
  과 같이 격자 모양 상자의 칸에 하나씩 넣어서 창고에 보관한다. 
  창고에 보관되는 토마토들 중에는 잘 익은 것도 있지만, 아직 익지 않은 토마토들도 있을 수 
  있다. 보관 후 하루가 지나면, 익은 토마토들의 인접한 곳에 있는 익지 않은 토마토들은 익은 
  토마토의 영향을 받아 익게 된다. 하나의 토마토의 인접한 곳은 왼쪽, 오른쪽, 앞, 뒤 네 방향
  에 있는 토마토를 의미한다. 대각선 방향에 있는 토마토들에게는 영향을 주지 못하며, 토마토
  가 혼자 저절로 익는 경우는 없다고 가정한다. 현수는 창고에 보관된 토마토들이 며칠이 지나
  면 다 익게 되는지, 그 최소 일수를 알고 싶어 합니다. 여러분이 도와주세요.
  단, 상자의 일부 칸에는 토마토가 들어있지 않을 수도 있다.
  ▣ 입력설명
  매개변수 board에 하나의 상자에 저장된 토마토들의 정보가 주어집니다. 정수 1은 익은 토마
  토, 정수 0은 익지 않은 토마토, 정수 -1은 토마토가 들어있지 않은 칸을 나타낸다. 
  ▣ 출력설명
  여러분은 토마토가 모두 익을 때까지의 최소 날짜를 반환해야 합니다. 만약, 저장될 때부터 모
  든 토마토가 익어있는 상태이면 0을 출력해야 하고, 토마토가 모두 익지는 못하는 상황이면 
  -1을 출력해야 한다.
  ▣ 매개변수 형식 1 
  [[0, 0, -1, 0, 0, 0], [0, 0, 1, 0, -1, 0], [0, 0, -1, 0, 0, 0], [0, 0, 0, 0, -1, 1]]
  ▣ 반환값 형식 1
  4
  */
