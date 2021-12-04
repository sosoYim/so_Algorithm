function solution(n, candidates) {
  let lt = 0;
  let max = 1;

  const candidatesArr = [...candidates].map(v => v).sort();
  let letter = candidatesArr[0];
  for (let rt = 1; rt < candidatesArr.length; rt++) {
    if (candidatesArr[rt] !== candidatesArr[rt - 1]) {
      if (max < rt - lt) {
        max = rt - lt;
        letter = candidatesArr[rt - 1];
      }
      lt = rt;
    }
  }

  return letter;
}

console.log(solution(15, 'BACBACCACCBDEDE'));
