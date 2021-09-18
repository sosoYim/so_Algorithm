// https://programmers.co.kr/learn/courses/30/lessons/43165
// 타겟넘버
// 소요시간 : 13분

function solution(numbers, target) {
  let answer = 0; //방법의 수
  //   const part = [];
  const len = numbers.length;
  function DFS(L, sum) {
    if (L === len) {
      answer = sum === target ? (answer += 1) : answer;
    } else {
      DFS(L + 1, sum + numbers[L]);
      DFS(L + 1, sum + -numbers[L]);
    }
  }
  DFS(0, 0);
  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
