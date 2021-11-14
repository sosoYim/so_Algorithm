/**
 * https://leetcode.com/problems/isomorphic-strings/
 * 205. Isomorphic Strings
 * Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;
  const sMap = new Map();
  for (let i = 0; i < s.length; i++) {
    if (sMap.has(s[i])) {
      sMap.set(s[i], [...sMap.get(s[i]), i]);
    } else {
      sMap.set(s[i], [i]);
    }
  }

  for (let [_, val] of sMap) {
    const cur = t[val[0]];
    for (let idx of val) {
      if (t[idx] !== cur) return false;
    }
  }

  return true;
};

console.log(isIsomorphic('egg', 'add'));
