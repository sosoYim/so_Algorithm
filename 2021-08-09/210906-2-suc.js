//[성공]

function solution(x, n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}

//다른 사람 풀이 : while 문 사용
//n 이 0이되면 while문에서 false 가 되는 점 이용

function solution2(x, n) {
  var answer = [];
  var num = x;
  while (n) {
    answer.push(num);
    num += x;
    n--;
  }
  return answer;
}

console.log(solution(2, 4));
//[2,4,6,8]
console.log('=============');
console.log(solution2(2, 4));
