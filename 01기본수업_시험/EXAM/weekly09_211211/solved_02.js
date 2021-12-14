// 회문:0 유사회문:1 기타:2

function solution(s) {
  var answer = [];

  function whatPalindrom(word) {
    let lt = 0;
    let rt = word.length - 1;
    let flag = true;
    // console.log(word);
    while (lt <= rt) {
      word[lt];
      if (word[lt] !== word[rt] && !flag) return 2;
      if (word[lt] !== word[rt] && flag) {
        word[lt + 1] === word[rt] ? (lt += 1) : (rt -= 1);
        flag = false;
      } else {
        lt += 1;
        rt -= 1;
      }
    }
    return flag ? 0 : 1;
  }
  s.forEach(word => answer.push(whatPalindrom(word)));
  return answer;
}

console.log(solution(['abba', 'summuus', 'xabba', 'xabbay', 'comcom', 'comwwmoc', 'comwwtmoc'])); //[0, 1, 1, 2, 2, 0, 1]
// console.log(solution(['xabba', 'xabbay'])); // [1,2]
