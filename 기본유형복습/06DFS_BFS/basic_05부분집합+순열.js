// 순열(모든 길이 탐색) + 부분집합(모든 순서)

function solution(arr) {
  const result = [];
  let part = [];
  const ch = Array(arr.length).fill(0);

  function DFS(L, limit) {
    if (L === limit) {
      if (part.length) result.push([...part]);
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          part.push(arr[i]);
          DFS(L + 1, limit);
          part.pop();
          ch[i] = 0;
        }
      }
    }
  }

  for (let i = 1; i <= arr.length; i++) {
    DFS(0, i);
    part = [];
  }

  return result;
}

console.log(solution([1, 2, 3]));
