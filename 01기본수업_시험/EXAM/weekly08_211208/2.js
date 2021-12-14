function solution(s) {
  var answer = 0;
  const sMap = new Map();
  // const uniques = new Set(sMap);
  for (let x of s) {
    sMap.set(x, (sMap.get(x) || 0) + 1);
  }
  const ch = Array(106).fill(0);

  for (const [key, val] of sMap) {
    // console.log(val);
    ch[val] += 1;
  }
  console.log(ch);

  let lt = 1;
  for (let i = 1; i < ch.length; i++) {
    let rt = i + 1;
    if (i > 1) {
      while (ch[lt] !== 0 && lt < i) lt += 1;
      while (ch[rt] !== 0 && rt < ch.length) rt += 1;
      let point = 0;
      if (ch[lt] === 0 && ch[rt] === 0) {
        console.log(lt, rt);
        if (i - lt > rt - i) point = rt;
        else point = lt;
        // point = Math.min(i - lt, rt -i);
      } else if (ch[lt] === 0) point = lt;
      else if (ch[rt] === 0) point = rt;
      if (point < i) answer += (i - point) * (ch[i] - 1);
      else answer += (point - i) * (ch[i] - 1);
    }
  }

  return answer;
}

console.log(solution('aaabbbcc'));
