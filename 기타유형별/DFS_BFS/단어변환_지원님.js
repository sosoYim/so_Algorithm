function comp(a, b) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      count += 1;
    }
    if (count > 1) return false;
  }
  return true;
}

function solution(begin, target, words) {
  // let cnt = 0;
  let queue = [[begin, 0]];
  let diff = Array.from({ length: words.length }, () => 0);

  if (!words.includes(target)) {
    return 0;
  }

  while (queue.length) {
    let [tmp_word, lev] = queue.shift();
    if (tmp_word === target) return lev;
    for (let i = 0; i < words.length; i++) {
      if (diff[i] === 0 && comp(tmp_word, words[i])) {
        diff[i] = 1;
        queue.push([words[i], lev + 1]);
      }
    }
    // cnt++;
    // if (queue.includes(target)) return cnt;
  }
  return 0;
}

console.log(solution('hit', 'cog', ['cog', 'log', 'lot', 'dog', 'dot', 'hot']));
