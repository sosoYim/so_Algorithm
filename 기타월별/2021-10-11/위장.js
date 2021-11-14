// https://programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes) {
  const sMap = new Map();
  clothes.forEach(([cloth, genre]) => {
    sMap.set(genre, (sMap.get(genre) || 1) + 1);
  });

  const vals = sMap.values();
  // console.log(vals);
  return [...vals].reduce((acc, cur) => acc * cur, 1) - 1;
}

console.log(
  solution([
    ['yellowhat', 'headgear'],
    ['bluesunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ])
); // 5

// console.log(
//   solution([
//     ['crowmask', 'face'],
//     ['bluesunglasses', 'face'],
//     ['smoky_makeup', 'face'],
//   ])
// ); // 3
