function solution(s) {
  const sSet = new Set();

  function isLetterWithTwo(s1, s2) {
    return +s1 !== 0 && +(s1 + s2) <= 26;
  }

  function DFS(str, ing) {
    if (str.length === 0) sSet.add(ing);
    else {
      // const ch = Array(str.length).fill(0);
      for (let i = 0; i < str.length; i++) {
        if (+str[i] === 0) break;
        DFS(str.slice(i + 1), ing + '-' + str[i]);
        if (i < str.length - 1 && isLetterWithTwo(str[i], str[i + 1])) {
          DFS(str.slice(i + 2), ing + '-' + str[i] + str[i + 1]);
        }
      }
    }
  }

  DFS(s, '');
  console.log(sSet);
  return [...sSet].filter(v => v.replace(/-/g, '') === s).length;
}

console.log(solution('25114')); // 6
