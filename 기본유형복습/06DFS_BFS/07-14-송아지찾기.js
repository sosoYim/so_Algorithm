/*
송아지 찾기(BFS : 상태트리탐색)
현수는 송아지를 잃어버렸다. 다행히 송아지에는 위치추적기가 달려 있다. 현수의 위치와 송아
지의 위치가 수직선상의 좌표 점으로 주어지면 현수는 현재 위치에서 송아지의 위치까지 다음
과 같은 방법으로 이동한다. 송아지는 움직이지 않고 제자리에 있다. 
현수는 스카이 콩콩을 타고 가는데 한 번의 점프로 앞으로 1, 뒤로 1, 앞으로 5를 이동할 수 
있다. 최소 몇 번의 점프로 현수가 송아지의 위치까지 갈 수 있는지 구하는 프로그램을 작성
하세요.
▣ 입력설명
매개변수 s에 현수의 위치 S와 매개변수 e에 송아지의 위치 E가 주어집니다. 
직선의 좌표 점은 1부터 10,000까지이다.
▣ 출력설명
점프의 최소횟수를 반환합니다. 답은 1이상입니다.
▣ 매개변수 형식 1 
5 14
▣ 반환값 형식 1
3
▣ 매개변수 형식 2 
8 3
▣ 반환값 형식 2
5
*/

function solution(s, e) {
  const mv = [1, -1, 5];
  function BFS() {
    const ch = Array(e + 5).fill(0);
    const q = [];
    q.push([0, s]);
    while (q.length) {
      const cur = q.shift();
      if (cur[1] === e) return cur[0];
      else {
        for (let i = 0; i < 3; i++) {
          const next = cur[1] + mv[i];
          if (next > 0 && next < ch.length && ch[next] === 0) {
            ch[next] = 1;
            q.push([cur[0] + 1, next]);
          }
        }
      }
    }
  }

  return BFS();
}

console.log(solution(5, 14));
console.log(solution(8, 3));
