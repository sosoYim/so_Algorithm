// [93.Restore IP Adress](https://leetcode.com/problems/restore-ip-addresses/)

function solution(s) {
  const answer = [];
  // const temp = [];
  function DFS(L, IParr) {
    if (IParr.length === 4 && s.length === L) {
      answer.push(IParr.join('.'));
      return;
    }
    if (IParr.length === 4 || s.length === L) return;
    for (let i = L; i < s.length; i++) {
      if (i !== L && s[L] === '0') return;
      const num = parseInt(s.slice(L, i + 1));
      if (num > 255) return;
      IParr.push(num);
      DFS(i + 1, IParr);
      IParr.pop();
    }
  }

  DFS(0, []);
  return answer;
}

console.log(solution('25525511135')); //["255.255.11.135","255.255.111.35"]
