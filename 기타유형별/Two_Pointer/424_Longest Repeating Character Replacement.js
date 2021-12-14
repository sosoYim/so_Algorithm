/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var characterReplacement = function (s, k) {
  let answer = 0;
  let lt = 0;
  let maxCnt = 0;
  const hMap = new Map();

  for (let rt = 0; rt < s.length; rt++) {
    // 해시맵에 lt~rt 사이의 글자들 갯수를 카운팅하고
    // 그 중 가장 많이 카운팅 된 수를 변수에 담는다.
    hMap.set(s[rt], (hMap.get(s[rt]) || 0) + 1); // rt 해시맵에 카운트
    maxCnt = Math.max(maxCnt, hMap.get(s[rt])); // maxCnt 업데이트
    // console.log('rt 시작 ', rt, s[rt], hMap);

    // lt~rt 사이의 글자들에서 가장 많이 카운팅된 글자 수를 빼고 남은 것 = 바꿔야할 글자 수
    // 바꿔야할 글자 수가 k 보다 크면 => lt 를 옮기며 슬라이딩
    while (rt - lt + 1 - maxCnt > k) {
      // 해시맵에서 lt 카운트 하나 빼기
      hMap.set(s[lt], hMap.get(s[lt]) - 1);
      // maxCnt 업데이트
      maxCnt = Math.max(...[...hMap.values()]);
      // lt 이동
      lt += 1;
    }

    // 이번 rt 기준 가능한 최대 길이를 answer 와 비교
    answer = Math.max(answer, rt - lt + 1);
  }
  return answer;
};

// console.log(characterReplacement('ABAB', 2)); // 4
console.log(characterReplacement('AABABBA', 1)); // 4
// console.log(characterReplacement('AAAA', 2)); // 4
// console.log(characterReplacement('ABBB', 2)); // 4
