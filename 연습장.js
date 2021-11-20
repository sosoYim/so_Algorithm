function solution(n, m) {
  const answer = [];
  const part = [];
  const ch = Array(n + 1).fill(0);

  function DFS(L, s) {
    if (L === m) answer.push([...part]);
    else {
      for (let i = s; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          part.push(i);
          DFS(L + 1, i);
          part.pop();
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0, 1);
  return answer;
}

console.log(solution(3, 2));
