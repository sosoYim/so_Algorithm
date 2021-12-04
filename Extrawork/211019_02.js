// Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.

function solution(num) {
  let bit = '';
  while (num >= 2) {
    if (num % 2 === 0) bit = '0' + bit;
    else bit = '1' + bit;

    num = Math.floor(num / 2);
  }
  if (num === 1) bit = 1 + bit;

  console.log(bit);
}

function solution2(num) {
  let answer = [];
  let result = true;

  // 2진수 구하기 (6진수, 12진수 다하기...)
  while (num > 0) {
    answer.unshift(num % 2);
    num = parseInt(num / 2);
  }

  // 같은 숫자가 붙어 있지 않은지 반환
  for (let i = 0; i < answer.length - 1; i++) {
    if (answer[i] === answer[i + 1]) {
      result = false;
      break;
    }
  }

  console.log(answer);
  return result;
}

console.log(solution2(2));
