//https://programmers.co.kr/learn/courses/30/lessons/42576
function solution(participant, completion) {
  let answer = '';
  participant.sort();
  completion.sort();
  // console.log(!!answer)
  participant.reduce((acc, current, index, array) => {
    console.log(acc, current, index, array);
    if (!answer && current !== completion[index]) {
      answer = current;
    }
  }, '');
  // console.log(answer)
  return answer;
}

console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']));
