function solution(n, relations) {
  let result = 0;
  const dislike = Array.from({ length: 9 }, () => Array(9).fill(0));
  const ch = Array(9).fill(0);

  const part = [0];
  for (let x of relations) {
    const [i, j] = x.split(' ');
    dislike[+i][+j] = 1;
    dislike[+j][+i] = 1;
  }

  function DFS(L) {
    if (L === 9) {
      result += 1;
    } else {
      for (let i = 1; i <= 8; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          part.push(i);
          if (dislike[part[L - 1]][part[L]] === 0) {
            DFS(L + 1);
          }
          part.pop();
          ch[i] = 0;
        }
      }
    }
  }
  DFS(1);
  // console.log(graph);
  return result;
}

console.log(solution(4, ['5 3', '4 3', '4 7', '3 6'])); // 10560
// console.log(solution(4, ['3 6', '5 7', '4 1', '8 7'])); // 13152
// console.log(solution(3, ['5 7', '2 6', '2 1'])); // 16800
