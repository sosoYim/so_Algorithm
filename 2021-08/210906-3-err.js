// 행렬의 덧셈 [오류]
// https://programmers.co.kr/learn/courses/30/lessons/12950
// array from 배열 생성하는게 어렵다

// function solution(arr1, arr2) {
//   let len = arr1.length;
//   let answer = Array.from({ length: len }, () => Array.from({ length: len }, 0));
//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len; j++) {
//       answer[i][j] = arr1[i][j] + arr2[i][j];
//     }
//   }
//   return answer;
// }
//코드 실행시 맞는데 채점하면 다 틀림!
function solution2(arr1, arr2) {
  let answer = [[]];
  for (let i = 0; i < arr1.lenght; i++) {
    let arr = [];
    for (let j = 0; j < arr1[0].length; j++) {
      arr[j] = arr1[i][j] + arr2[i][j];
    }
    answer[i] = arr;
  }
  return answer;
}

// console.log(
//   solution(
//     [
//       [1, 2],
//       [2, 3],
//     ],
//     [
//       [3, 4],
//       [5, 6],
//     ]
//   )
// );
console.log(
  solution2(
    [
      [1, 2, 5],
      [2, 3, 4],
    ],
    [
      [3, 4, 2],
      [5, 6, 3],
    ]
  )
);
