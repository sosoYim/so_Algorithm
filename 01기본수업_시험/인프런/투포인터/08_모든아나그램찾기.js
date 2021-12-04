function solution(s, t) {
  let lt = 0;
  let answer = 0;
  const tH = new Map();
  const sH = new Map();

  function compareMap(m1, m2) {
    if (m1.size !== m2.size) return false;
    for (const [key, value] of m1) {
      if (m2.get(key) !== value) return false;
    }
    return true;
  }

  for (let x of t) {
    tH.set(x, (tH.get(x) || 0) + 1);
  }
  for (let i = 0; i < t.length - 1; i++) {
    sH.set(s[i], (sH.get(s[i]) || 0) + 1);
  }
  for (let rt = t.length - 1; rt < s.length; rt++) {
    sH.set(s[rt], (sH.get(s[rt]) || 0) + 1);
    if (compareMap(sH, tH)) answer += 1;
    sH.get(s[lt]) === 1 ? sH.delete(s[lt]) : sH.set(s[lt], sH.get(s[lt]) - 1);
    lt += 1;
  }
  return answer;
}

console.log(solution('bacaAacba', 'abc'));
