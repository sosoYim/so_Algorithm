// https://programmers.co.kr/learn/courses/30/lessons/42587
// 프린터 프로그래머스
// 다른 사람 풀이 some 활용 참고해보기

function solution(priorities, location) {
  let answer = 0;
  const complete = [];
  // priorities 배열 요소 => [우선순위, 현재인덱스]
  priorities.reduce((acc, cur, i) => {
    priorities[i] = [cur, i];
  }, 0);

  // priorities의 모든 값들이 정렬되어 나갈때까지
  while (priorities.length > 0) {
    // priorities 첫째 값 뽑기
    const J = priorities.shift();
    // complete 배열로 보낼까?
    let flag = true;
    // priorities에 남은 요소중 하나라도 값이 큰게 있으면
    // priorities 가장 뒤로 넘기기
    // flag false
    for (let x of priorities) {
      if (J[0] < x[0]) {
        priorities.push(J);
        flag = false;
        break;
      }
    }
    // 위의 for문에서 걸리지 않았다면 complete에 push
    if (flag) {
      complete.push(J);
    }
  }

  // location 값으로 찾은 후 index + 1 하면 1부터 순서
  for (let i = 0; i < complete.length; i++) {
    if (complete[i][1] === location) {
      answer = i + 1;
      break;
    }
  }
  return answer;
}

console.log(solution([2, 1, 3, 2], 2));
