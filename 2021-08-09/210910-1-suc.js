//https://programmers.co.kr/learn/courses/30/lessons/42576
function solution(participant, completion) {
  //1. 정렬
  participant.sort();
  completion.sort();
  // 2. 정렬된 participant와 completion이 다를때,
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

// console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']));
console.log(solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav']));
