function solution(n, relations) {
  let result = 0;
  const graph = Array.from({ length: 8 + 1 }, () => Array(8 + 1).fill(0));
  for (let x of relations) {
    const [one, two] = x.split(' ').map(v => parseInt(v));
    graph[one][two] = 1;
    graph[two][one] = 1;
  }

  const ch = Array(9).fill(0);
  const part = [0];

  function DFS(L) {
    if (L === 9) {
      result += 1;
    } else {
      for (let i = 1; i < 9; i++) {
        if (ch[i] === 0) {
          // console.log(part[part.length - 1]);
          // if (part.length > 0 && graph[part[part.length - 1]][i] === 1) return;
          ch[i] = 1;
          part.push(i);
          if (graph[part[L - 1]][part[L]] === 0) DFS(L + 1);
          part.pop();
          ch[i] = 0;
        }
      }
    }
  }
  DFS(1);

  return result;
}

console.log(solution(4, ['5 3', '4 3', '4 7', '3 6'])); // 10560
// console.log(solution(4, ['3 6', '5 7', '4 1', '8 7'])); // 13152
// console.log(solution(3, ['5 7', '2 6', '2 1'])); // 16800
