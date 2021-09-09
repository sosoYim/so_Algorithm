//https://programmers.co.kr/learn/courses/30/lessons/1845
//폰켓몬
//map의 길이는 size 로 !

function solution(nums) {
  let answer = 0;
  const poketNum = parseInt(nums.length / 2);
  let maxCombi = 0;
  let map = new Map();
  for (let x of nums) {
    if (map.has(x)) continue;
    else map.set(x, 1);
  }
  maxCombi = map.size;

  answer = poketNum >= maxCombi ? maxCombi : poketNum;

  return answer;
}

// console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 2]));
