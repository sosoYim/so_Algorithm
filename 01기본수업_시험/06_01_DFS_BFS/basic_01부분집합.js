// 부분 집합
// (point!) 레벨별로 해당 요소를 넣거나 빼거나 선택의 연속

function subset(arr) {
  const part = [];
  const result = [];
  const len = arr.length;
  function DFS(L) {
    if (L === len) {
      if (part.length > 0) result.push([...part]);
    } else {
      part.push(arr[L]);
      DFS(L + 1);
      part.pop(arr[L]);
      DFS(L + 1);
    }
  }

  DFS(0);

  return result;
}

console.log(subset([1, 2, 3]));
