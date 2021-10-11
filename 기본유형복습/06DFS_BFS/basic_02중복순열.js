// 중복 순열
// (point!) for문을 돌면서 중복 가능한 요소를 넣어준다.

function dbPermutation(arr, limit) {
  const result = [];
  const part = [];

  function DFS(L) {
    if (L === limit) {
      if (part.length) result.push([...part]);
    } else {
      for (let i = 0; i < arr.length; i++) {
        part.push(arr[i]); // 중복 가능한 요소를 넣어주기
        DFS(L + 1);
        part.pop();
      }
    }
  }

  DFS(0);
  return result;
}

console.log(dbPermutation([1, 2, 3], 2));
