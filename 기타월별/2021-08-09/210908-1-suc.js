//https://programmers.co.kr/learn/courses/30/lessons/42748
//k번째 수

function solution(array, commands) {
  let answer = [];
  for (let x of commands) {
    let start = x[0] - 1;
    let end = x[1];
    let point = x[2] - 1;
    let tmpArr;

    tmpArr = array.slice(start, end);
    tmpArr.sort((a, b) => a - b);
    answer.push(tmpArr[point]);
  }
  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
//5,6,3

//TODO: 이거 외우자!
const intArray = Array.from('12345', e => e * 1);
console.log(intArray);

console.log(2 ** (2 ** 3));
