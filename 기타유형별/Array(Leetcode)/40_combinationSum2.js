/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const result = [];
  const part = [];
  candidates.sort((a, b) => a - b);

  function DFS(L, s, sum) {
    if (sum > target) return;
    if (sum === target) {
      result.push([...part]);
      return;
    } else {
      for (let i = s; i < candidates.length; i++) {
        // 같은 위치(레벨L)에서 같은 값(candidates의 요소)을 넣었다 빼지 않도록 한다. ***
        if (i > s && candidates[i] === candidates[i - 1]) continue;

        part.push(candidates[i]);
        DFS(L + 1, i + 1, sum + candidates[i]);
        part.pop();
      }
    }
  }
  DFS(0, 0, 0);
  return result;
};

console.log(combinationSum2([1, 1, 1, 1, 5], 8));
