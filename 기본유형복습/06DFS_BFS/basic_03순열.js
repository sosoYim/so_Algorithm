// 순열
// (뽑는 순서가 영향을 끼치는 조합)
// 중복순열에서 체크배열로 중복 불허

function permutation(arr, limit) {
  const result = [];
  const part = [];
  const ch = Array(arr.length).fill(0);
  function DFS(L) {
    if (L === limit) {
      if (part.length) result.push([...part]);
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          part.push(arr[i]);
          DFS(L + 1);
          part.pop();
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0);
  return result;
}

console.log(permutation([1, 2, 3], 2));
