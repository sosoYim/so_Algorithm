/**
 * 387. First Unique Character in a String
 * https://leetcode.com/problems/first-unique-character-in-a-string/
 * Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
 * 
Input: s = "leetcode"
Output: 0

Input: s = "loveleetcode"
Output: 2
 */

var firstUniqChar = function (s) {
  const sMap = new Map();
  for (let i = 0; i < s.length; i++) {
    sMap.set(i, [s[i]]);
  }
  console.log(sMap);
  for (let [k, v] of sMap) {
    if (v[1] === 1) return v[0];
  }
};

console.log(firstUniqChar('loveleetcode'));
