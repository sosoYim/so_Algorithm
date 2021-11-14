// Input: s = "abcabcbb" Output: 3
//Given a string s, find the length of the longest substring without repeating characters.

const lengthOfLongestSubstring = function (str) {
  let lt = 0;
  let answer = 0;
  // let answer = '';
  const sSet = new Set();
  for (let rt = 0; rt < str.length; rt++) {
    if (sSet.has(str[rt])) {
      while (sSet.has(str[rt]) && lt < rt) {
        sSet.delete(str[lt]);
        lt += 1;
      }
    }
    sSet.add(str[rt]);
    const actualLength = rt - lt + 1;
    answer = answer < actualLength ? actualLength : answer;
    // answer = answer.length < rt - lt + 1 ? str.slice(lt, rt + 1) : answer;
  }
  return answer;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
