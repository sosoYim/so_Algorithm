// point:  배열을 값으로

function solution(str) {
  let idx = Number.MAX_SAFE_INTEGER;
  let answer = '';
  const nH = new Map();

  for (let i = 0; i < str.length; i++) {
    if (nH.has(str[i])) {
      let tmp = nH.get(str[i]);
      nH.set(str[i], [tmp[0], tmp[0]]);
    } else {
      nH.set(str[i], [1, i]);
    }
    nH.set(str[i], [parseInt(nH.get(str[i]) || 0) + 1, i]);
  }

  for (let [key, val] of nH) {
    if (val[0] === 1 && idx !== Math.min(idx, val[1])) {
      idx = val[1];
      answer = key;
      console.log(key);
    }
  }

  return answer;
}

console.log(solution('statistics'));
