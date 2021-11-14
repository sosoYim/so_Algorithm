// n 이하의 수 중에 m개 뽑기
function solution(n, m) {
  let answer = [],
    tmp = [];
  let ch = Array.from({ length: n + 1 }, () => 0);
  function DFS(L) {
    if (L === m) {
      answer.push([...tmp]); //deep copy
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp.push(i);
          DFS(L + 1);
          tmp.pop();
          ch[i] = 0; //pop 하면 체크 빼줘야 함
        }
      }
    }
  }
  DFS(0);
  return answer;
}

console.log(solution(3, 2));
// [ [ 1, 2 ], [ 1, 3 ], [ 2, 1 ], [ 2, 3 ], [ 3, 1 ], [ 3, 2 ] ]

//06-07 중복순열에 check걸어서 중복 불허한 순열 구하기

//매개변수에 따라 변화되는 깊이의 다중 for문을 유연하게 대처하기 위해
//재귀함수를 이용한다.
//순열 : 중복순열에 check만 걸면 된다.
