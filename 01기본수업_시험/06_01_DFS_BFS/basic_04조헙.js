// 조합
// 뽑는 순서가 상관없이
// limit 갯수를 뽑는 것

function combination(arr, limit) {
  const result = [];
  const part = [];
  const ch = Array(arr.length).fill(0);

  function DFS(L, s) {
    if (L === limit) {
      if (part.length) result.push([...part]);
    } else {
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

console.log(combination([1, 2, 3], 2));
