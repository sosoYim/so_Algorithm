/**
 * @param {string} s
 * @return {string[][]}
 */
const isPalindrome = str => str === str.split('').reverse().join('');

var partition = function (s) {
  const result = [];

  // 시작 문자열 : slice(0,i) i = 1~str.length
  function DFS(parts, str) {
    if (str.length === 0) {
      result.push(parts);
      parts = [];
    } else {
      for (let i = 1; i < str.length + 1; i++) {
        const strPart = str.slice(0, i);
        console.log(strPart, console.log(isPalindrome(strPart)));
        parts.push(strPart);
        if (isPalindrome(strPart)) DFS(parts, str.slice(i));
        else parts.pop();
      }
    }
  }

  DFS([], s);
  return result;
};

console.log(partition('aab'));
