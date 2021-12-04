// https://programmers.co.kr/learn/courses/30/lessons/72414 
// 강사님 의도대로 풀기

function solution(times) {
  // var answer = 0;
  const dy = Array(73).fill(0); // 시간별 배열
  for (let [s, e] of times) {
    for (let i = s; i < e; i++) {
      dy[i] += 1;
    }
  }
  dy.sort((a, b) => b - a);

  return dy[0];
}

console.log(
  solution([
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
