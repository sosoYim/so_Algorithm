/**
 * 500. Keyboard Row
 * https://leetcode.com/problems/keyboard-row/
Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

In the American keyboard:
the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm".
Input: words = ["Hello","Alaska","Dad","Peace"]
Output: ["Alaska","Dad"]
 */

var findWords = function (words) {
  const result = [];
  const row1 = 'qwertyuiop'.split('');
  const row2 = 'asdfghjkl'.split('');
  const row3 = 'zxcvbnm'.split('');
  const sMap = new Map();
  for (let x of row1) {
    sMap.set(x, 1);
  }
  for (let x of row2) {
    sMap.set(x, 2);
  }
  for (let x of row3) {
    sMap.set(x, 3);
  }
  for (let word of words) {
    const _word = word.toLowerCase();
    const row = sMap.get(_word[0]);
    let flag = true;
    for (let letter of _word) {
      if (sMap.get(letter) !== row) {
        flag = false;
        continue;
      }
    }
    if (flag) result.push(word);
  }
  return result;
};
console.log(findWords(['Hello', 'Alaska', 'Dad', 'Peace']));
