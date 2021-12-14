function solution(s) {
  let answer = s.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt());
  return answer;
}

console.log(solution('aBAcdD'));
