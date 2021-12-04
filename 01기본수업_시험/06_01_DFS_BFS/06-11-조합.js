// [REPEAT CK] : 2
//꼭 외우기!!!

function solution(n, m) {
  const answer = [];
  const part = [];

  function DFS(L, s) {
    if (L === m) answer.push([...part]);
    else {
      for (let i = s; i < n + 1; i++) {
        part.push(i);
        DFS(L + 1, i + 1);
        part.pop();
      }
    }
  }
  DFS(0, 1);

  return answer;
}

console.log(solution(4, 2));

/*
  조합 구하기
  1부터 N까지 번호가 적힌 구슬이 있습니다. 이 중 M개를 뽑는 방법의 수를 출력하는 프로그
  램을 작성하세요.
  ▣ 입력설명
  매개변수 n에 자연수 N(3<=N<=10)과 매개변수 m에 M(2<=M<=N) 이 주어집니다.
  ▣ 출력설명
  조합의 결과를 배열형태로 반환하세요.
  ▣ 매개변수 형식 1 
  4 2
  ▣ 반환값 형식 1
  [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]
  */
