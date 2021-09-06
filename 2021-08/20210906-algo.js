//직사각형 별찍기 [진행중]
//https://programmers.co.kr/learn/courses/30/lessons/12969

function solution(a, b) {
  for (let i = 0; i < b; i++) {
    let stars = '';
    for (let j = 0; j < a; j++) {
      stars += '*';
    }
    console.log(stars);
  }
}

function solution2(a, b) {
  let result = '';
  for (let i = 0; i < b; i++) {
    for (let j = 0; j < a; j++) {
      result += '*';
    }
    result += '\n';
  }
  return result;
}

solution(5, 3);
console.log('=======');
console.log(solution2(5, 3));
