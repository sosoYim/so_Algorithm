// https://programmers.co.kr/learn/courses/30/lessons/84512
/**
 *
 * @param 'string' word
 * @returns number
 */
function solution(word) {
  const letters = ['A', 'E', 'I', 'O', 'U'];
  const sMap = new Map();
  let order = 0;

  function DFS(str, l) {
    if (l > letters.length) return;
    else {
      if (!sMap.has(str)) sMap.set(str, order++);
      for (let i = 0; i < letters.length; i++) {
        DFS(str + letters[i], l + 1);
      }
    }
  }

  DFS('', 0);

  return sMap.get(word);
}

console.log(solution('AAAAE')); // 6
console.log(solution('AAAE')); // 10
console.log(solution('I')); // 1563
console.log(solution('EIO')); // 1189
