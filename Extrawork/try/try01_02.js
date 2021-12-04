/**
 * Input: s = "leetcode"
Output: 0
 */

function solution(s) {
  const sMap = new Map();
  for (let x of s) {
    sMap.set(x, (sMap.get(x) || 0) + 1);
  }
  for (let i = 0; i < s.length; i++) {
    if (sMap.get(s[i]) === 1) return s[i];
  }
  return -1;
}

console.log(solution('leetcode'));
