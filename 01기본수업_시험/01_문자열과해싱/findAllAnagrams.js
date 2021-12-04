/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 * https://leetcode.com/problems/find-all-anagrams-in-a-string/
 */
var findAnagrams = function (s, p) {
  const result = [];
  let lt = 0;
  const sH = new Map();
  let tempH = new Map();
  for (let x of p) {
    sH.set(x, (sH.get(x) || 0) + 1);
    tempH.set(x, (tempH.get(x) || 0) + 1);
  }

  for (let rt = 0; rt < s.length; rt++) {
    if (!sH.has(s[rt])) {
      lt = rt + 1;
      tempH = new Map(sH);
      continue;
    } else {
      if (!tempH.has(s[rt])) {
        while (lt <= rt && !tempH.has(s[rt])) {
          tempH.set(s[lt], (tempH.get(s[lt]) || 0) + 1);
          lt += 1;
        }
      }
      tempH.get(s[rt]) === 1 ? tempH.delete(s[rt]) : tempH.set(s[rt], tempH.get(s[rt]) - 1);
      if (tempH.size === 0) {
        result.push(lt);
        tempH.set(s[lt], (tempH.get(s[lt]) || 0) + 1);
        lt += 1;
      }
    }
  }
  return result;
};

console.log(findAnagrams('abacbabc', 'abc')); // 1,2,3,5
