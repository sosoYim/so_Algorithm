function solution(people, relation) {
  // 누가 누굴 좋아하는지 관계도
  const arr = Array.from({ length: people.length }, () => Array(people.length).fill(0));
  // 후보인지 아닌지 체크 (0 -> 1)
  const ch = Array(people.length).fill(0);
  // 답 : 선물 받을 사람
  const answer = Array(people.length).fill(0);

  // 관계도 생성
  for (let i = 0; i < relation.length; i++) {
    let [row, col] = relation[i].split(' ');
    row = row.charCodeAt() - 65;
    col = col.charCodeAt() - 65;

    // 누가 누구 좋아하는지 카운팅
    arr[row][col] = 1;
  }

  // 몇명이 좋아하는가
  for (let col = 0; col < arr.length; col++) {
    let count = 0;
    for (let row = 0; row < arr.length; row++) {
      count += arr[row][col];
    }
    if (count >= 2) ch[col] = 1;
  }

  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr.length; col++) {
      if (arr[row][col] === 1 && ch[col] === 1) answer[row] = answer[row] + 1;
    }
  }
  // console.log('A'.charCodeAt());
  // const answer = Array(relation.length).fill(0);
  // const nMap = new Map();
  // for (let [i, picked] of relation) {
  //   nMap.set(picked, (nMap.get(picked) || 0) + 1);
  // }
  // console.log(nMap);
  // for (let [key, value] of nMap) {
  //   if (value < 2) nMap.delete(key);
  // }
  // console.log(nMap);
  // for (let [i, picked] of relation) {
  //   if (nMap.has(picked)) answer[i] += 1;
  // }
  return answer;
}

const relation = ['A B', 'B C', 'B A', 'C D', 'B D', 'C B'];
const people = ['A', 'B', 'C', 'D'];
console.log(solution(people, relation));
