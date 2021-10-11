function permutation(arr, m) {
  const part = [];
  const result = [];
  const ch = Array(arr.length).fill(0);

  function DFS(L, s) {
    if (L === m) result.push([...part]);
    else {
      for (let i = s; i < arr.length; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          part.push(arr[i]);
          DFS(L + 1, i);
          part.pop();
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0, 0);
  return result;
}

console.log(permutation([1, 2, 3, 4], 3));
